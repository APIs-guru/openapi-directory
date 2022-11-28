import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListActivatedRulesInRuleGroupXAmzTargetEnum {
    Awswaf20150824ListActivatedRulesInRuleGroup = "AWSWAF_20150824.ListActivatedRulesInRuleGroup"
}
export declare class ListActivatedRulesInRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActivatedRulesInRuleGroupXAmzTargetEnum;
}
export declare class ListActivatedRulesInRuleGroupRequest extends SpeakeasyBase {
    headers: ListActivatedRulesInRuleGroupHeaders;
    request: shared.ListActivatedRulesInRuleGroupRequest;
}
export declare class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    listActivatedRulesInRuleGroupResponse?: shared.ListActivatedRulesInRuleGroupResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
}
