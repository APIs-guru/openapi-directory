import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallDomainsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallDomainsXAmzTargetEnum {
    Route53ResolverListFirewallDomains = "Route53Resolver.ListFirewallDomains"
}
export declare class ListFirewallDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallDomainsXAmzTargetEnum;
}
export declare class ListFirewallDomainsRequest extends SpeakeasyBase {
    queryParams: ListFirewallDomainsQueryParams;
    headers: ListFirewallDomainsHeaders;
    request: shared.ListFirewallDomainsRequest;
}
export declare class ListFirewallDomainsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listFirewallDomainsResponse?: shared.ListFirewallDomainsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
