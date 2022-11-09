import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallRuleGroupAssociationXAmzTargetEnum {
    Route53ResolverUpdateFirewallRuleGroupAssociation = "Route53Resolver.UpdateFirewallRuleGroupAssociation"
}
export declare class UpdateFirewallRuleGroupAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallRuleGroupAssociationXAmzTargetEnum;
}
export declare class UpdateFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
    headers: UpdateFirewallRuleGroupAssociationHeaders;
    request: shared.UpdateFirewallRuleGroupAssociationRequest;
}
export declare class UpdateFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallRuleGroupAssociationResponse?: shared.UpdateFirewallRuleGroupAssociationResponse;
    validationException?: any;
}
