import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResolverQueryLogConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverQueryLogConfigsXAmzTargetEnum {
    Route53ResolverListResolverQueryLogConfigs = "Route53Resolver.ListResolverQueryLogConfigs"
}
export declare class ListResolverQueryLogConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverQueryLogConfigsXAmzTargetEnum;
}
export declare class ListResolverQueryLogConfigsRequest extends SpeakeasyBase {
    queryParams: ListResolverQueryLogConfigsQueryParams;
    headers: ListResolverQueryLogConfigsHeaders;
    request: shared.ListResolverQueryLogConfigsRequest;
}
export declare class ListResolverQueryLogConfigsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    listResolverQueryLogConfigsResponse?: shared.ListResolverQueryLogConfigsResponse;
    statusCode: number;
    throttlingException?: any;
}
