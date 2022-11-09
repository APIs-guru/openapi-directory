import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRegexMatchSetXAmzTargetEnum {
    AwswafRegional20161128GetRegexMatchSet = "AWSWAF_Regional_20161128.GetRegexMatchSet"
}
export declare class GetRegexMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegexMatchSetXAmzTargetEnum;
}
export declare class GetRegexMatchSetRequest extends SpeakeasyBase {
    headers: GetRegexMatchSetHeaders;
    request: shared.GetRegexMatchSetRequest;
}
export declare class GetRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    getRegexMatchSetResponse?: shared.GetRegexMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
