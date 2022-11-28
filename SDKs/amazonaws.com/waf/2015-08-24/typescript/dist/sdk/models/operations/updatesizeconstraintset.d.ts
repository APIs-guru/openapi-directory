import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSizeConstraintSetXAmzTargetEnum {
    Awswaf20150824UpdateSizeConstraintSet = "AWSWAF_20150824.UpdateSizeConstraintSet"
}
export declare class UpdateSizeConstraintSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSizeConstraintSetXAmzTargetEnum;
}
export declare class UpdateSizeConstraintSetRequest extends SpeakeasyBase {
    headers: UpdateSizeConstraintSetHeaders;
    request: shared.UpdateSizeConstraintSetRequest;
}
export declare class UpdateSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateSizeConstraintSetResponse?: shared.UpdateSizeConstraintSetResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
