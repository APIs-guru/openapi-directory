import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListRuleGroupsXAmzTargetEnum {
    AwswafRegional20161128ListRuleGroups = "AWSWAF_Regional_20161128.ListRuleGroups"
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
    headers: ListRuleGroupsHeaders;
    request: shared.ListRuleGroupsRequest;
}
export declare class ListRuleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    listRuleGroupsResponse?: shared.ListRuleGroupsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
}
