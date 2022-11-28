import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSizeConstraintSetXAmzTargetEnum {
    AwswafRegional20161128CreateSizeConstraintSet = "AWSWAF_Regional_20161128.CreateSizeConstraintSet"
}
export declare class CreateSizeConstraintSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSizeConstraintSetXAmzTargetEnum;
}
export declare class CreateSizeConstraintSetRequest extends SpeakeasyBase {
    headers: CreateSizeConstraintSetHeaders;
    request: shared.CreateSizeConstraintSetRequest;
}
export declare class CreateSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    createSizeConstraintSetResponse?: shared.CreateSizeConstraintSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
