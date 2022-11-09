import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateRegexPatternSetXAmzTargetEnum {
    Awswaf20150824CreateRegexPatternSet = "AWSWAF_20150824.CreateRegexPatternSet"
}
export declare class CreateRegexPatternSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRegexPatternSetXAmzTargetEnum;
}
export declare class CreateRegexPatternSetRequest extends SpeakeasyBase {
    headers: CreateRegexPatternSetHeaders;
    request: shared.CreateRegexPatternSetRequest;
}
export declare class CreateRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    createRegexPatternSetResponse?: shared.CreateRegexPatternSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
