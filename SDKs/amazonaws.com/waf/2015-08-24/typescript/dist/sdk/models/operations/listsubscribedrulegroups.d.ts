import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListSubscribedRuleGroupsXAmzTargetEnum {
    Awswaf20150824ListSubscribedRuleGroups = "AWSWAF_20150824.ListSubscribedRuleGroups"
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
