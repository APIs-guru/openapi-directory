import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomDataIdentifiersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListCustomDataIdentifiersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCustomDataIdentifiersRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListCustomDataIdentifiersRequest extends SpeakeasyBase {
    queryParams: ListCustomDataIdentifiersQueryParams;
    headers: ListCustomDataIdentifiersHeaders;
    request: ListCustomDataIdentifiersRequestBody;
}
export declare class ListCustomDataIdentifiersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listCustomDataIdentifiersResponse?: shared.ListCustomDataIdentifiersResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
