import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteFirewallRuleXAmzTargetEnum {
    Route53ResolverDeleteFirewallRule = "Route53Resolver.DeleteFirewallRule"
}
export declare class DeleteFirewallRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallRuleXAmzTargetEnum;
}
export declare class DeleteFirewallRuleRequest extends SpeakeasyBase {
    headers: DeleteFirewallRuleHeaders;
    request: shared.DeleteFirewallRuleRequest;
}
export declare class DeleteFirewallRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteFirewallRuleResponse?: shared.DeleteFirewallRuleResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
