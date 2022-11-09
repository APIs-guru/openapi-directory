import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourceSharesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetResourceSharesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetResourceSharesRequestBodyResourceOwnerEnum {
    Self = "SELF",
    OtherAccounts = "OTHER-ACCOUNTS"
}
export declare enum GetResourceSharesRequestBodyResourceShareStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Deleted = "DELETED"
}
export declare class GetResourceSharesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    name?: string;
    nextToken?: string;
    permissionArn?: string;
    resourceOwner: GetResourceSharesRequestBodyResourceOwnerEnum;
    resourceShareArns?: string[];
    resourceShareStatus?: GetResourceSharesRequestBodyResourceShareStatusEnum;
    tagFilters?: shared.TagFilter[];
}
export declare class GetResourceSharesRequest extends SpeakeasyBase {
    queryParams: GetResourceSharesQueryParams;
    headers: GetResourceSharesHeaders;
    request: GetResourceSharesRequestBody;
}
export declare class GetResourceSharesResponse extends SpeakeasyBase {
    contentType: string;
    getResourceSharesResponse?: shared.GetResourceSharesResponse;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    malformedArnException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
