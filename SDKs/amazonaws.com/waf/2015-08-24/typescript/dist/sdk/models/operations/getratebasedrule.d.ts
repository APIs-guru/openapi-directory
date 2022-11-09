import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRateBasedRuleXAmzTargetEnum {
    Awswaf20150824GetRateBasedRule = "AWSWAF_20150824.GetRateBasedRule"
}
export declare class GetRateBasedRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRateBasedRuleXAmzTargetEnum;
}
export declare class GetRateBasedRuleRequest extends SpeakeasyBase {
    headers: GetRateBasedRuleHeaders;
    request: shared.GetRateBasedRuleRequest;
}
export declare class GetRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    getRateBasedRuleResponse?: shared.GetRateBasedRuleResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
