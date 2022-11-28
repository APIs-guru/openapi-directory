import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateResolverEndpointXAmzTargetEnum {
    Route53ResolverUpdateResolverEndpoint = "Route53Resolver.UpdateResolverEndpoint"
}
export declare class UpdateResolverEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResolverEndpointXAmzTargetEnum;
}
export declare class UpdateResolverEndpointRequest extends SpeakeasyBase {
    headers: UpdateResolverEndpointHeaders;
    request: shared.UpdateResolverEndpointRequest;
}
export declare class UpdateResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateResolverEndpointResponse?: shared.UpdateResolverEndpointResponse;
}
