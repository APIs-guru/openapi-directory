import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFirewallsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFirewallsXAmzTargetEnum {
    NetworkFirewall20201112ListFirewalls = "NetworkFirewall_20201112.ListFirewalls"
}
export declare class ListFirewallsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFirewallsXAmzTargetEnum;
}
export declare class ListFirewallsRequest extends SpeakeasyBase {
    queryParams: ListFirewallsQueryParams;
    headers: ListFirewallsHeaders;
    request: shared.ListFirewallsRequest;
}
export declare class ListFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    listFirewallsResponse?: shared.ListFirewallsResponse;
    statusCode: number;
    throttlingException?: any;
}
