import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateByteMatchSetXAmzTargetEnum {
    Awswaf20150824UpdateByteMatchSet = "AWSWAF_20150824.UpdateByteMatchSet"
}
export declare class UpdateByteMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateByteMatchSetXAmzTargetEnum;
}
export declare class UpdateByteMatchSetRequest extends SpeakeasyBase {
    headers: UpdateByteMatchSetHeaders;
    request: shared.UpdateByteMatchSetRequest;
}
export declare class UpdateByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateByteMatchSetResponse?: shared.UpdateByteMatchSetResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
