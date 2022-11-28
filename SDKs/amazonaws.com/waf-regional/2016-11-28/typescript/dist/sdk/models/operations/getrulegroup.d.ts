import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRuleGroupXAmzTargetEnum {
    AwswafRegional20161128GetRuleGroup = "AWSWAF_Regional_20161128.GetRuleGroup"
}
export declare class GetRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRuleGroupXAmzTargetEnum;
}
export declare class GetRuleGroupRequest extends SpeakeasyBase {
    headers: GetRuleGroupHeaders;
    request: shared.GetRuleGroupRequest;
}
export declare class GetRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    getRuleGroupResponse?: shared.GetRuleGroupResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
}
