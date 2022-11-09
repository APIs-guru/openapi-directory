import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverDisassociateResolverQueryLogConfig = "Route53Resolver.DisassociateResolverQueryLogConfig"
}
export declare class DisassociateResolverQueryLogConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateResolverQueryLogConfigXAmzTargetEnum;
}
export declare class DisassociateResolverQueryLogConfigRequest extends SpeakeasyBase {
    headers: DisassociateResolverQueryLogConfigHeaders;
    request: shared.DisassociateResolverQueryLogConfigRequest;
}
export declare class DisassociateResolverQueryLogConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateResolverQueryLogConfigResponse?: shared.DisassociateResolverQueryLogConfigResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
