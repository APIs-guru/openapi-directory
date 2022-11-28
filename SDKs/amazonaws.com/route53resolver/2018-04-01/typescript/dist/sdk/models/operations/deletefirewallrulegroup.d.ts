import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverDeleteFirewallRuleGroup = "Route53Resolver.DeleteFirewallRuleGroup"
}
export declare class DeleteFirewallRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallRuleGroupXAmzTargetEnum;
}
export declare class DeleteFirewallRuleGroupRequest extends SpeakeasyBase {
    headers: DeleteFirewallRuleGroupHeaders;
    request: shared.DeleteFirewallRuleGroupRequest;
}
export declare class DeleteFirewallRuleGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteFirewallRuleGroupResponse?: shared.DeleteFirewallRuleGroupResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
