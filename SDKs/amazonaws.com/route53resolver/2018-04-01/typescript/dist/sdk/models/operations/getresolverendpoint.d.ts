import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetResolverEndpointXAmzTargetEnum {
    Route53ResolverGetResolverEndpoint = "Route53Resolver.GetResolverEndpoint"
}
export declare class GetResolverEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverEndpointXAmzTargetEnum;
}
export declare class GetResolverEndpointRequest extends SpeakeasyBase {
    headers: GetResolverEndpointHeaders;
    request: shared.GetResolverEndpointRequest;
}
export declare class GetResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    getResolverEndpointResponse?: shared.GetResolverEndpointResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
