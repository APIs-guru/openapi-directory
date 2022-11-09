import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListResourcesRequestBodyResourceOwnerEnum {
    Self = "SELF",
    OtherAccounts = "OTHER-ACCOUNTS"
}
export declare class ListResourcesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    principal?: string;
    resourceArns?: string[];
    resourceOwner: ListResourcesRequestBodyResourceOwnerEnum;
    resourceShareArns?: string[];
    resourceType?: string;
}
export declare class ListResourcesRequest extends SpeakeasyBase {
    queryParams: ListResourcesQueryParams;
    headers: ListResourcesHeaders;
    request: ListResourcesRequestBody;
}
export declare class ListResourcesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    invalidResourceTypeException?: any;
    listResourcesResponse?: shared.ListResourcesResponse;
    malformedArnException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
