import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDashboardRequestBody extends SpeakeasyBase {
    clientToken?: string;
    dashboardDefinition: string;
    dashboardDescription?: string;
    dashboardName: string;
    projectId: string;
    tags?: Map<string, string>;
}
export declare class CreateDashboardRequest extends SpeakeasyBase {
    headers: CreateDashboardHeaders;
    request: CreateDashboardRequestBody;
}
export declare class CreateDashboardResponse extends SpeakeasyBase {
    contentType: string;
    createDashboardResponse?: shared.CreateDashboardResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
