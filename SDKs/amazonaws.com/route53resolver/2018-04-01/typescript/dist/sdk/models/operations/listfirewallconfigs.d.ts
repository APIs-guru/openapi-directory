import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallConfigsXAmzTargetEnum {
    Route53ResolverListFirewallConfigs = "Route53Resolver.ListFirewallConfigs"
}
export declare class ListFirewallConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallConfigsXAmzTargetEnum;
}
export declare class ListFirewallConfigsRequest extends SpeakeasyBase {
    queryParams: ListFirewallConfigsQueryParams;
    headers: ListFirewallConfigsHeaders;
    request: shared.ListFirewallConfigsRequest;
}
export declare class ListFirewallConfigsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listFirewallConfigsResponse?: shared.ListFirewallConfigsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
