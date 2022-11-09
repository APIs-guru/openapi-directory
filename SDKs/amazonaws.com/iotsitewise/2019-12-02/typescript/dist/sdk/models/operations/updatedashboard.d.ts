import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDashboardPathParams extends SpeakeasyBase {
    dashboardId: string;
}
export declare class UpdateDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDashboardRequestBody extends SpeakeasyBase {
    clientToken?: string;
    dashboardDefinition: string;
    dashboardDescription?: string;
    dashboardName: string;
}
export declare class UpdateDashboardRequest extends SpeakeasyBase {
    pathParams: UpdateDashboardPathParams;
    headers: UpdateDashboardHeaders;
    request: UpdateDashboardRequestBody;
}
export declare class UpdateDashboardResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDashboardResponse?: Map<string, any>;
}
