import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallRuleGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallRuleGroupsXAmzTargetEnum {
    Route53ResolverListFirewallRuleGroups = "Route53Resolver.ListFirewallRuleGroups"
}
export declare class ListFirewallRuleGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallRuleGroupsXAmzTargetEnum;
}
export declare class ListFirewallRuleGroupsRequest extends SpeakeasyBase {
    queryParams: ListFirewallRuleGroupsQueryParams;
    headers: ListFirewallRuleGroupsHeaders;
    request: shared.ListFirewallRuleGroupsRequest;
}
export declare class ListFirewallRuleGroupsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listFirewallRuleGroupsResponse?: shared.ListFirewallRuleGroupsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
