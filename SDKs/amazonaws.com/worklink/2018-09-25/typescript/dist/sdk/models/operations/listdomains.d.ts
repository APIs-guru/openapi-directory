import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDomainsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDomainsRequestBody extends SpeakeasyBase {
    fleetArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDomainsRequest extends SpeakeasyBase {
    queryParams: ListDomainsQueryParams;
    headers: ListDomainsHeaders;
    request: ListDomainsRequestBody;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    listDomainsResponse?: shared.ListDomainsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
