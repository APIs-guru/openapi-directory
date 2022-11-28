import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateXssMatchSetXAmzTargetEnum {
    Awswaf20150824CreateXssMatchSet = "AWSWAF_20150824.CreateXssMatchSet"
}
export declare class CreateXssMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateXssMatchSetXAmzTargetEnum;
}
export declare class CreateXssMatchSetRequest extends SpeakeasyBase {
    headers: CreateXssMatchSetHeaders;
    request: shared.CreateXssMatchSetRequest;
}
export declare class CreateXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    createXssMatchSetResponse?: shared.CreateXssMatchSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
