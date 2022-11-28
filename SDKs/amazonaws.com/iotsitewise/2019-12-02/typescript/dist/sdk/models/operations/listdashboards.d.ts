import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDashboardsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    projectId: string;
}
export declare class ListDashboardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDashboardsRequest extends SpeakeasyBase {
    queryParams: ListDashboardsQueryParams;
    headers: ListDashboardsHeaders;
}
export declare class ListDashboardsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDashboardsResponse?: shared.ListDashboardsResponse;
    statusCode: number;
    throttlingException?: any;
}
