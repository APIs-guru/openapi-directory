import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateXssMatchSetXAmzTargetEnum {
    AwswafRegional20161128UpdateXssMatchSet = "AWSWAF_Regional_20161128.UpdateXssMatchSet"
}
export declare class UpdateXssMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateXssMatchSetXAmzTargetEnum;
}
export declare class UpdateXssMatchSetRequest extends SpeakeasyBase {
    headers: UpdateXssMatchSetHeaders;
    request: shared.UpdateXssMatchSetRequest;
}
export declare class UpdateXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateXssMatchSetResponse?: shared.UpdateXssMatchSetResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
