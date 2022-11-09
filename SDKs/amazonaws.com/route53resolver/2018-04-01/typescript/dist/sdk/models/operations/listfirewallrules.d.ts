import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFirewallRulesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallRulesXAmzTargetEnum {
    Route53ResolverListFirewallRules = "Route53Resolver.ListFirewallRules"
}
export declare class ListFirewallRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallRulesXAmzTargetEnum;
}
export declare class ListFirewallRulesRequest extends SpeakeasyBase {
    queryParams: ListFirewallRulesQueryParams;
    headers: ListFirewallRulesHeaders;
    request: shared.ListFirewallRulesRequest;
}
export declare class ListFirewallRulesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listFirewallRulesResponse?: shared.ListFirewallRulesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
