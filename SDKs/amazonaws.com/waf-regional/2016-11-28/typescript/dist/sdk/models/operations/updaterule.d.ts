import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateRuleXAmzTargetEnum {
    AwswafRegional20161128UpdateRule = "AWSWAF_Regional_20161128.UpdateRule"
}
export declare class UpdateRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRuleXAmzTargetEnum;
}
export declare class UpdateRuleRequest extends SpeakeasyBase {
    headers: UpdateRuleHeaders;
    request: shared.UpdateRuleRequest;
}
export declare class UpdateRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRuleResponse?: shared.UpdateRuleResponse;
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
