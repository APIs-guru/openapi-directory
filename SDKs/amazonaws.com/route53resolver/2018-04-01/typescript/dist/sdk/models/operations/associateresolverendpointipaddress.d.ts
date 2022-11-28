import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateResolverEndpointIpAddressXAmzTargetEnum {
    Route53ResolverAssociateResolverEndpointIpAddress = "Route53Resolver.AssociateResolverEndpointIpAddress"
}
export declare class AssociateResolverEndpointIpAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateResolverEndpointIpAddressXAmzTargetEnum;
}
export declare class AssociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
    headers: AssociateResolverEndpointIpAddressHeaders;
    request: shared.AssociateResolverEndpointIpAddressRequest;
}
export declare class AssociateResolverEndpointIpAddressResponse extends SpeakeasyBase {
    associateResolverEndpointIpAddressResponse?: shared.AssociateResolverEndpointIpAddressResponse;
    contentType: string;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
