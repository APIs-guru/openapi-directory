import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetXssMatchSetXAmzTargetEnum {
    AwswafRegional20161128GetXssMatchSet = "AWSWAF_Regional_20161128.GetXssMatchSet"
}
export declare class GetXssMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetXssMatchSetXAmzTargetEnum;
}
export declare class GetXssMatchSetRequest extends SpeakeasyBase {
    headers: GetXssMatchSetHeaders;
    request: shared.GetXssMatchSetRequest;
}
export declare class GetXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    getXssMatchSetResponse?: shared.GetXssMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
