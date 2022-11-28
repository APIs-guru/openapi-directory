import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallPoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallPoliciesXAmzTargetEnum {
    NetworkFirewall20201112ListFirewallPolicies = "NetworkFirewall_20201112.ListFirewallPolicies"
}
export declare class ListFirewallPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallPoliciesXAmzTargetEnum;
}
export declare class ListFirewallPoliciesRequest extends SpeakeasyBase {
    queryParams: ListFirewallPoliciesQueryParams;
    headers: ListFirewallPoliciesHeaders;
    request: shared.ListFirewallPoliciesRequest;
}
export declare class ListFirewallPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    listFirewallPoliciesResponse?: shared.ListFirewallPoliciesResponse;
    statusCode: number;
    throttlingException?: any;
}
