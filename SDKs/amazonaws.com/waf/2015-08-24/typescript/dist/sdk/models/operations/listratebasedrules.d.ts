import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRateBasedRulesXAmzTargetEnum {
    Awswaf20150824ListRateBasedRules = "AWSWAF_20150824.ListRateBasedRules"
}
export declare class ListRateBasedRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRateBasedRulesXAmzTargetEnum;
}
export declare class ListRateBasedRulesRequest extends SpeakeasyBase {
    headers: ListRateBasedRulesHeaders;
    request: shared.ListRateBasedRulesRequest;
}
export declare class ListRateBasedRulesResponse extends SpeakeasyBase {
    contentType: string;
    listRateBasedRulesResponse?: shared.ListRateBasedRulesResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
