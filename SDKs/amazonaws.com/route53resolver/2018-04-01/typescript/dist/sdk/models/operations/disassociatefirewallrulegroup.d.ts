import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverDisassociateFirewallRuleGroup = "Route53Resolver.DisassociateFirewallRuleGroup"
}
export declare class DisassociateFirewallRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateFirewallRuleGroupXAmzTargetEnum;
}
export declare class DisassociateFirewallRuleGroupRequest extends SpeakeasyBase {
    headers: DisassociateFirewallRuleGroupHeaders;
    request: shared.DisassociateFirewallRuleGroupRequest;
}
export declare class DisassociateFirewallRuleGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    disassociateFirewallRuleGroupResponse?: shared.DisassociateFirewallRuleGroupResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
