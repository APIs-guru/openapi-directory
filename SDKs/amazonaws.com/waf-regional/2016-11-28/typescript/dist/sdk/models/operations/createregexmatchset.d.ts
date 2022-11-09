import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateRegexMatchSetXAmzTargetEnum {
    AwswafRegional20161128CreateRegexMatchSet = "AWSWAF_Regional_20161128.CreateRegexMatchSet"
}
export declare class CreateRegexMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRegexMatchSetXAmzTargetEnum;
}
export declare class CreateRegexMatchSetRequest extends SpeakeasyBase {
    headers: CreateRegexMatchSetHeaders;
    request: shared.CreateRegexMatchSetRequest;
}
export declare class CreateRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    createRegexMatchSetResponse?: shared.CreateRegexMatchSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
