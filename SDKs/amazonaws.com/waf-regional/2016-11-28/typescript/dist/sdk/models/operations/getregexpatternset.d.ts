import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRegexPatternSetXAmzTargetEnum {
    AwswafRegional20161128GetRegexPatternSet = "AWSWAF_Regional_20161128.GetRegexPatternSet"
}
export declare class GetRegexPatternSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegexPatternSetXAmzTargetEnum;
}
export declare class GetRegexPatternSetRequest extends SpeakeasyBase {
    headers: GetRegexPatternSetHeaders;
    request: shared.GetRegexPatternSetRequest;
}
export declare class GetRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    getRegexPatternSetResponse?: shared.GetRegexPatternSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
