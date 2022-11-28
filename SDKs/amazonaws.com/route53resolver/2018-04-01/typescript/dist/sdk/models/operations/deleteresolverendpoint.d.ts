import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResolverEndpointXAmzTargetEnum {
    Route53ResolverDeleteResolverEndpoint = "Route53Resolver.DeleteResolverEndpoint"
}
export declare class DeleteResolverEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResolverEndpointXAmzTargetEnum;
}
export declare class DeleteResolverEndpointRequest extends SpeakeasyBase {
    headers: DeleteResolverEndpointHeaders;
    request: shared.DeleteResolverEndpointRequest;
}
export declare class DeleteResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    deleteResolverEndpointResponse?: shared.DeleteResolverEndpointResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
