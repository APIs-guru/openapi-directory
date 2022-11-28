import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
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
    badRequestException?: shared.BadRequestException;
    contentType: string;
    internalFailureException?: shared.InternalFailureException;
    listProjectsResult?: shared.ListProjectsResult;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
