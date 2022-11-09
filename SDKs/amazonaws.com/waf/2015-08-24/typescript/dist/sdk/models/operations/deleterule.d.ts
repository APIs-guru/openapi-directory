import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteRuleXAmzTargetEnum {
    Awswaf20150824DeleteRule = "AWSWAF_20150824.DeleteRule"
}
export declare class DeleteRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRuleXAmzTargetEnum;
}
export declare class DeleteRuleRequest extends SpeakeasyBase {
    headers: DeleteRuleHeaders;
    request: shared.DeleteRuleRequest;
}
export declare class DeleteRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteRuleResponse?: shared.DeleteRuleResponse;
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
