import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateGeoMatchSetXAmzTargetEnum {
    AwswafRegional20161128UpdateGeoMatchSet = "AWSWAF_Regional_20161128.UpdateGeoMatchSet"
}
export declare class UpdateGeoMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGeoMatchSetXAmzTargetEnum;
}
export declare class UpdateGeoMatchSetRequest extends SpeakeasyBase {
    headers: UpdateGeoMatchSetHeaders;
    request: shared.UpdateGeoMatchSetRequest;
}
export declare class UpdateGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateGeoMatchSetResponse?: shared.UpdateGeoMatchSetResponse;
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
