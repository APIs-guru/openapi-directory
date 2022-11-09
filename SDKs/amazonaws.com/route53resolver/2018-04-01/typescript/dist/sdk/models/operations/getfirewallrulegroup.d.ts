import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroup = "Route53Resolver.GetFirewallRuleGroup"
}
export declare class GetFirewallRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallRuleGroupXAmzTargetEnum;
}
export declare class GetFirewallRuleGroupRequest extends SpeakeasyBase {
    headers: GetFirewallRuleGroupHeaders;
    request: shared.GetFirewallRuleGroupRequest;
}
export declare class GetFirewallRuleGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFirewallRuleGroupResponse?: shared.GetFirewallRuleGroupResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
