import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResolverQueryLogConfigAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverQueryLogConfigAssociationsXAmzTargetEnum {
    Route53ResolverListResolverQueryLogConfigAssociations = "Route53Resolver.ListResolverQueryLogConfigAssociations"
}
export declare class ListResolverQueryLogConfigAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverQueryLogConfigAssociationsXAmzTargetEnum;
}
export declare class ListResolverQueryLogConfigAssociationsRequest extends SpeakeasyBase {
    queryParams: ListResolverQueryLogConfigAssociationsQueryParams;
    headers: ListResolverQueryLogConfigAssociationsHeaders;
    request: shared.ListResolverQueryLogConfigAssociationsRequest;
}
export declare class ListResolverQueryLogConfigAssociationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    listResolverQueryLogConfigAssociationsResponse?: shared.ListResolverQueryLogConfigAssociationsResponse;
    statusCode: number;
    throttlingException?: any;
}
