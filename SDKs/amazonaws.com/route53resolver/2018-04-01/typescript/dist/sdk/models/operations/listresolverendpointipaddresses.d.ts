import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResolverEndpointIpAddressesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverEndpointIpAddressesXAmzTargetEnum {
    Route53ResolverListResolverEndpointIpAddresses = "Route53Resolver.ListResolverEndpointIpAddresses"
}
export declare class ListResolverEndpointIpAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverEndpointIpAddressesXAmzTargetEnum;
}
export declare class ListResolverEndpointIpAddressesRequest extends SpeakeasyBase {
    queryParams: ListResolverEndpointIpAddressesQueryParams;
    headers: ListResolverEndpointIpAddressesHeaders;
    request: shared.ListResolverEndpointIpAddressesRequest;
}
export declare class ListResolverEndpointIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listResolverEndpointIpAddressesResponse?: shared.ListResolverEndpointIpAddressesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
