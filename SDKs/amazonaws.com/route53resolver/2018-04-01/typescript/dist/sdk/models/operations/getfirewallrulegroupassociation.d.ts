import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetFirewallRuleGroupAssociationXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroupAssociation = "Route53Resolver.GetFirewallRuleGroupAssociation"
}
export declare class GetFirewallRuleGroupAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallRuleGroupAssociationXAmzTargetEnum;
}
export declare class GetFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
    headers: GetFirewallRuleGroupAssociationHeaders;
    request: shared.GetFirewallRuleGroupAssociationRequest;
}
export declare class GetFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFirewallRuleGroupAssociationResponse?: shared.GetFirewallRuleGroupAssociationResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
