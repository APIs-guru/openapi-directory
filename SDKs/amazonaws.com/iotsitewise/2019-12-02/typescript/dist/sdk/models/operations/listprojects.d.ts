import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    portalId: string;
}
export declare class ListProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    queryParams: ListProjectsQueryParams;
    headers: ListProjectsHeaders;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listProjectsResponse?: shared.ListProjectsResponse;
    statusCode: number;
    throttlingException?: any;
}
