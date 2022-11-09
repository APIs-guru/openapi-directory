import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverCreateFirewallRuleGroup = "Route53Resolver.CreateFirewallRuleGroup"
}
export declare class CreateFirewallRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallRuleGroupXAmzTargetEnum;
}
export declare class CreateFirewallRuleGroupRequest extends SpeakeasyBase {
    headers: CreateFirewallRuleGroupHeaders;
    request: shared.CreateFirewallRuleGroupRequest;
}
export declare class CreateFirewallRuleGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createFirewallRuleGroupResponse?: shared.CreateFirewallRuleGroupResponse;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
