import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteRuleGroupXAmzTargetEnum {
    Awswaf20150824DeleteRuleGroup = "AWSWAF_20150824.DeleteRuleGroup"
}
export declare class DeleteRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRuleGroupXAmzTargetEnum;
}
export declare class DeleteRuleGroupRequest extends SpeakeasyBase {
    headers: DeleteRuleGroupHeaders;
    request: shared.DeleteRuleGroupRequest;
}
export declare class DeleteRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteRuleGroupResponse?: shared.DeleteRuleGroupResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidOperationException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
