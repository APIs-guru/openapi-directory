import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListWebsiteAuthorizationProvidersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWebsiteAuthorizationProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWebsiteAuthorizationProvidersRequestBody extends SpeakeasyBase {
    fleetArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWebsiteAuthorizationProvidersRequest extends SpeakeasyBase {
    queryParams: ListWebsiteAuthorizationProvidersQueryParams;
    headers: ListWebsiteAuthorizationProvidersHeaders;
    request: ListWebsiteAuthorizationProvidersRequestBody;
}
export declare class ListWebsiteAuthorizationProvidersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    listWebsiteAuthorizationProvidersResponse?: shared.ListWebsiteAuthorizationProvidersResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
