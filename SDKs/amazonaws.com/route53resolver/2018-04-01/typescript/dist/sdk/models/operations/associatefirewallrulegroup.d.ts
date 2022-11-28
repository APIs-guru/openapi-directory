import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverAssociateFirewallRuleGroup = "Route53Resolver.AssociateFirewallRuleGroup"
}
export declare class AssociateFirewallRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFirewallRuleGroupXAmzTargetEnum;
}
export declare class AssociateFirewallRuleGroupRequest extends SpeakeasyBase {
    headers: AssociateFirewallRuleGroupHeaders;
    request: shared.AssociateFirewallRuleGroupRequest;
}
export declare class AssociateFirewallRuleGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateFirewallRuleGroupResponse?: shared.AssociateFirewallRuleGroupResponse;
    conflictException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
