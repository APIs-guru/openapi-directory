import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteSizeConstraintSetXAmzTargetEnum {
    Awswaf20150824DeleteSizeConstraintSet = "AWSWAF_20150824.DeleteSizeConstraintSet"
}
export declare class DeleteSizeConstraintSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSizeConstraintSetXAmzTargetEnum;
}
export declare class DeleteSizeConstraintSetRequest extends SpeakeasyBase {
    headers: DeleteSizeConstraintSetHeaders;
    request: shared.DeleteSizeConstraintSetRequest;
}
export declare class DeleteSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteSizeConstraintSetResponse?: shared.DeleteSizeConstraintSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
