import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBundlesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListBundlesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBundlesRequest extends SpeakeasyBase {
    queryParams: ListBundlesQueryParams;
    headers: ListBundlesHeaders;
}
export declare class ListBundlesResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    internalFailureException?: shared.InternalFailureException;
    listBundlesResult?: shared.ListBundlesResult;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
