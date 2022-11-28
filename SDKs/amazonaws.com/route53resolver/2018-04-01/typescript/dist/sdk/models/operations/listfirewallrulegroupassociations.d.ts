import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallRuleGroupAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallRuleGroupAssociationsXAmzTargetEnum {
    Route53ResolverListFirewallRuleGroupAssociations = "Route53Resolver.ListFirewallRuleGroupAssociations"
}
export declare class ListFirewallRuleGroupAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallRuleGroupAssociationsXAmzTargetEnum;
}
export declare class ListFirewallRuleGroupAssociationsRequest extends SpeakeasyBase {
    queryParams: ListFirewallRuleGroupAssociationsQueryParams;
    headers: ListFirewallRuleGroupAssociationsHeaders;
    request: shared.ListFirewallRuleGroupAssociationsRequest;
}
export declare class ListFirewallRuleGroupAssociationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listFirewallRuleGroupAssociationsResponse?: shared.ListFirewallRuleGroupAssociationsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
