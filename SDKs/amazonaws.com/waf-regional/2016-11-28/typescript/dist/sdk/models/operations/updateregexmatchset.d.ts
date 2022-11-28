import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRegexMatchSetXAmzTargetEnum {
    AwswafRegional20161128UpdateRegexMatchSet = "AWSWAF_Regional_20161128.UpdateRegexMatchSet"
}
export declare class UpdateRegexMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRegexMatchSetXAmzTargetEnum;
}
export declare class UpdateRegexMatchSetRequest extends SpeakeasyBase {
    headers: UpdateRegexMatchSetHeaders;
    request: shared.UpdateRegexMatchSetRequest;
}
export declare class UpdateRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRegexMatchSetResponse?: shared.UpdateRegexMatchSetResponse;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
