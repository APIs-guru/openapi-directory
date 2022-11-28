import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRateBasedRuleXAmzTargetEnum {
    Awswaf20150824DeleteRateBasedRule = "AWSWAF_20150824.DeleteRateBasedRule"
}
export declare class DeleteRateBasedRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRateBasedRuleXAmzTargetEnum;
}
export declare class DeleteRateBasedRuleRequest extends SpeakeasyBase {
    headers: DeleteRateBasedRuleHeaders;
    request: shared.DeleteRateBasedRuleRequest;
}
export declare class DeleteRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteRateBasedRuleResponse?: shared.DeleteRateBasedRuleResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
