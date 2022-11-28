import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRuleGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRuleGroupsXAmzTargetEnum {
    NetworkFirewall20201112ListRuleGroups = "NetworkFirewall_20201112.ListRuleGroups"
}
export declare class ListRuleGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRuleGroupsXAmzTargetEnum;
}
export declare class ListRuleGroupsRequest extends SpeakeasyBase {
    queryParams: ListRuleGroupsQueryParams;
    headers: ListRuleGroupsHeaders;
    request: shared.ListRuleGroupsRequest;
}
export declare class ListRuleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    listRuleGroupsResponse?: shared.ListRuleGroupsResponse;
    statusCode: number;
    throttlingException?: any;
}
