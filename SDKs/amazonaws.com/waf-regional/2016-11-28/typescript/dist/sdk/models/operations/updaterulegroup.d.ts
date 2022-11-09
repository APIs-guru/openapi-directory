import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateRuleGroupXAmzTargetEnum {
    AwswafRegional20161128UpdateRuleGroup = "AWSWAF_Regional_20161128.UpdateRuleGroup"
}
export declare class UpdateRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRuleGroupXAmzTargetEnum;
}
export declare class UpdateRuleGroupRequest extends SpeakeasyBase {
    headers: UpdateRuleGroupHeaders;
    request: shared.UpdateRuleGroupRequest;
}
export declare class UpdateRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRuleGroupResponse?: shared.UpdateRuleGroupResponse;
    wafInternalErrorException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
