import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallDomainListsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallDomainListsXAmzTargetEnum {
    Route53ResolverListFirewallDomainLists = "Route53Resolver.ListFirewallDomainLists"
}
export declare class ListFirewallDomainListsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallDomainListsXAmzTargetEnum;
}
export declare class ListFirewallDomainListsRequest extends SpeakeasyBase {
    queryParams: ListFirewallDomainListsQueryParams;
    headers: ListFirewallDomainListsHeaders;
    request: shared.ListFirewallDomainListsRequest;
}
export declare class ListFirewallDomainListsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listFirewallDomainListsResponse?: shared.ListFirewallDomainListsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
