import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutFirewallRuleGroupPolicyXAmzTargetEnum {
    Route53ResolverPutFirewallRuleGroupPolicy = "Route53Resolver.PutFirewallRuleGroupPolicy"
}
export declare class PutFirewallRuleGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutFirewallRuleGroupPolicyXAmzTargetEnum;
}
export declare class PutFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
    headers: PutFirewallRuleGroupPolicyHeaders;
    request: shared.PutFirewallRuleGroupPolicyRequest;
}
export declare class PutFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    putFirewallRuleGroupPolicyResponse?: shared.PutFirewallRuleGroupPolicyResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
