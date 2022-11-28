import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomPluginsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListCustomPluginsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCustomPluginsRequest extends SpeakeasyBase {
    queryParams: ListCustomPluginsQueryParams;
    headers: ListCustomPluginsHeaders;
}
export declare class ListCustomPluginsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listCustomPluginsResponse?: shared.ListCustomPluginsResponse;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
