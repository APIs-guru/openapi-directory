import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRegexPatternSetXAmzTargetEnum {
    AwswafRegional20161128UpdateRegexPatternSet = "AWSWAF_Regional_20161128.UpdateRegexPatternSet"
}
export declare class UpdateRegexPatternSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRegexPatternSetXAmzTargetEnum;
}
export declare class UpdateRegexPatternSetRequest extends SpeakeasyBase {
    headers: UpdateRegexPatternSetHeaders;
    request: shared.UpdateRegexPatternSetRequest;
}
export declare class UpdateRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRegexPatternSetResponse?: shared.UpdateRegexPatternSetResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidRegexPatternException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
