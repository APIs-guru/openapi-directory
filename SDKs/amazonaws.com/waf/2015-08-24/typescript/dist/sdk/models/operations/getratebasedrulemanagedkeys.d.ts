import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRateBasedRuleManagedKeysXAmzTargetEnum {
    Awswaf20150824GetRateBasedRuleManagedKeys = "AWSWAF_20150824.GetRateBasedRuleManagedKeys"
}
export declare class GetRateBasedRuleManagedKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRateBasedRuleManagedKeysXAmzTargetEnum;
}
export declare class GetRateBasedRuleManagedKeysRequest extends SpeakeasyBase {
    headers: GetRateBasedRuleManagedKeysHeaders;
    request: shared.GetRateBasedRuleManagedKeysRequest;
}
export declare class GetRateBasedRuleManagedKeysResponse extends SpeakeasyBase {
    contentType: string;
    getRateBasedRuleManagedKeysResponse?: shared.GetRateBasedRuleManagedKeysResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
}
