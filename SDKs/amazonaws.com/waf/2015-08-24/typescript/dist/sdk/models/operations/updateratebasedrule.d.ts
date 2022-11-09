import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateRateBasedRuleXAmzTargetEnum {
    Awswaf20150824UpdateRateBasedRule = "AWSWAF_20150824.UpdateRateBasedRule"
}
export declare class UpdateRateBasedRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRateBasedRuleXAmzTargetEnum;
}
export declare class UpdateRateBasedRuleRequest extends SpeakeasyBase {
    headers: UpdateRateBasedRuleHeaders;
    request: shared.UpdateRateBasedRuleRequest;
}
export declare class UpdateRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRateBasedRuleResponse?: shared.UpdateRateBasedRuleResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
