import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallRuleXAmzTargetEnum {
    Route53ResolverUpdateFirewallRule = "Route53Resolver.UpdateFirewallRule"
}
export declare class UpdateFirewallRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallRuleXAmzTargetEnum;
}
export declare class UpdateFirewallRuleRequest extends SpeakeasyBase {
    headers: UpdateFirewallRuleHeaders;
    request: shared.UpdateFirewallRuleRequest;
}
export declare class UpdateFirewallRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallRuleResponse?: shared.UpdateFirewallRuleResponse;
    validationException?: any;
}
