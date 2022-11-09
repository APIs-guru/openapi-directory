import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRuleXAmzTargetEnum {
    Awswaf20150824GetRule = "AWSWAF_20150824.GetRule"
}
export declare class GetRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRuleXAmzTargetEnum;
}
export declare class GetRuleRequest extends SpeakeasyBase {
    headers: GetRuleHeaders;
    request: shared.GetRuleRequest;
}
export declare class GetRuleResponse extends SpeakeasyBase {
    contentType: string;
    getRuleResponse?: shared.GetRuleResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
