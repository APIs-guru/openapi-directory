import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateFirewallRuleXAmzTargetEnum {
    Route53ResolverCreateFirewallRule = "Route53Resolver.CreateFirewallRule"
}
export declare class CreateFirewallRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallRuleXAmzTargetEnum;
}
export declare class CreateFirewallRuleRequest extends SpeakeasyBase {
    headers: CreateFirewallRuleHeaders;
    request: shared.CreateFirewallRuleRequest;
}
export declare class CreateFirewallRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createFirewallRuleResponse?: shared.CreateFirewallRuleResponse;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
