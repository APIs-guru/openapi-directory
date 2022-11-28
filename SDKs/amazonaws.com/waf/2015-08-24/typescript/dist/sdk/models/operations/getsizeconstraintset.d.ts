import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSizeConstraintSetXAmzTargetEnum {
    Awswaf20150824GetSizeConstraintSet = "AWSWAF_20150824.GetSizeConstraintSet"
}
export declare class GetSizeConstraintSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSizeConstraintSetXAmzTargetEnum;
}
export declare class GetSizeConstraintSetRequest extends SpeakeasyBase {
    headers: GetSizeConstraintSetHeaders;
    request: shared.GetSizeConstraintSetRequest;
}
export declare class GetSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    getSizeConstraintSetResponse?: shared.GetSizeConstraintSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
