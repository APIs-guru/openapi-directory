import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetFirewallRuleGroupPolicyXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroupPolicy = "Route53Resolver.GetFirewallRuleGroupPolicy"
}
export declare class GetFirewallRuleGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallRuleGroupPolicyXAmzTargetEnum;
}
export declare class GetFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
    headers: GetFirewallRuleGroupPolicyHeaders;
    request: shared.GetFirewallRuleGroupPolicyRequest;
}
export declare class GetFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFirewallRuleGroupPolicyResponse?: shared.GetFirewallRuleGroupPolicyResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
