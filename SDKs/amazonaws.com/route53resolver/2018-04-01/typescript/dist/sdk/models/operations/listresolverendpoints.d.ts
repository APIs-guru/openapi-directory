import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResolverEndpointsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverEndpointsXAmzTargetEnum {
    Route53ResolverListResolverEndpoints = "Route53Resolver.ListResolverEndpoints"
}
export declare class ListResolverEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverEndpointsXAmzTargetEnum;
}
export declare class ListResolverEndpointsRequest extends SpeakeasyBase {
    queryParams: ListResolverEndpointsQueryParams;
    headers: ListResolverEndpointsHeaders;
    request: shared.ListResolverEndpointsRequest;
}
export declare class ListResolverEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    listResolverEndpointsResponse?: shared.ListResolverEndpointsResponse;
    statusCode: number;
    throttlingException?: any;
}
