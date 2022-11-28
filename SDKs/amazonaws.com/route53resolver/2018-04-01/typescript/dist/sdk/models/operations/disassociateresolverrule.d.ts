import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateResolverRuleXAmzTargetEnum {
    Route53ResolverDisassociateResolverRule = "Route53Resolver.DisassociateResolverRule"
}
export declare class DisassociateResolverRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateResolverRuleXAmzTargetEnum;
}
export declare class DisassociateResolverRuleRequest extends SpeakeasyBase {
    headers: DisassociateResolverRuleHeaders;
    request: shared.DisassociateResolverRuleRequest;
}
export declare class DisassociateResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    disassociateResolverRuleResponse?: shared.DisassociateResolverRuleResponse;
    internalServiceErrorException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
