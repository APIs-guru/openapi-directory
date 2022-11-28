import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDashboardPathParams extends SpeakeasyBase {
    dashboardId: string;
}
export declare class DeleteDashboardQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDashboardRequest extends SpeakeasyBase {
    pathParams: DeleteDashboardPathParams;
    queryParams: DeleteDashboardQueryParams;
    headers: DeleteDashboardHeaders;
}
export declare class DeleteDashboardResponse extends SpeakeasyBase {
    contentType: string;
    deleteDashboardResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
