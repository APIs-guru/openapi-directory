import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteGeoMatchSetXAmzTargetEnum {
    AwswafRegional20161128DeleteGeoMatchSet = "AWSWAF_Regional_20161128.DeleteGeoMatchSet"
}
export declare class DeleteGeoMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGeoMatchSetXAmzTargetEnum;
}
export declare class DeleteGeoMatchSetRequest extends SpeakeasyBase {
    headers: DeleteGeoMatchSetHeaders;
    request: shared.DeleteGeoMatchSetRequest;
}
export declare class DeleteGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteGeoMatchSetResponse?: shared.DeleteGeoMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
