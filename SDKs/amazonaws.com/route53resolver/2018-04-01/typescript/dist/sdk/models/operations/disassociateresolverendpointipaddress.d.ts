import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateResolverEndpointIpAddressXAmzTargetEnum {
    Route53ResolverDisassociateResolverEndpointIpAddress = "Route53Resolver.DisassociateResolverEndpointIpAddress"
}
export declare class DisassociateResolverEndpointIpAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateResolverEndpointIpAddressXAmzTargetEnum;
}
export declare class DisassociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
    headers: DisassociateResolverEndpointIpAddressHeaders;
    request: shared.DisassociateResolverEndpointIpAddressRequest;
}
export declare class DisassociateResolverEndpointIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    disassociateResolverEndpointIpAddressResponse?: shared.DisassociateResolverEndpointIpAddressResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
