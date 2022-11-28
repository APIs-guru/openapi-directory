import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateResolverEndpointXAmzTargetEnum {
    Route53ResolverCreateResolverEndpoint = "Route53Resolver.CreateResolverEndpoint"
}
export declare class CreateResolverEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResolverEndpointXAmzTargetEnum;
}
export declare class CreateResolverEndpointRequest extends SpeakeasyBase {
    headers: CreateResolverEndpointHeaders;
    request: shared.CreateResolverEndpointRequest;
}
export declare class CreateResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    createResolverEndpointResponse?: shared.CreateResolverEndpointResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
