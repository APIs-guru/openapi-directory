import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListSubscribedRuleGroupsXAmzTargetEnum {
    AwswafRegional20161128ListSubscribedRuleGroups = "AWSWAF_Regional_20161128.ListSubscribedRuleGroups"
}
export declare class ListSubscribedRuleGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSubscribedRuleGroupsXAmzTargetEnum;
}
export declare class ListSubscribedRuleGroupsRequest extends SpeakeasyBase {
    headers: ListSubscribedRuleGroupsHeaders;
    request: shared.ListSubscribedRuleGroupsRequest;
}
export declare class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    listSubscribedRuleGroupsResponse?: shared.ListSubscribedRuleGroupsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
}
