import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteXssMatchSetXAmzTargetEnum {
    Awswaf20150824DeleteXssMatchSet = "AWSWAF_20150824.DeleteXssMatchSet"
}
export declare class DeleteXssMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteXssMatchSetXAmzTargetEnum;
}
export declare class DeleteXssMatchSetRequest extends SpeakeasyBase {
    headers: DeleteXssMatchSetHeaders;
    request: shared.DeleteXssMatchSetRequest;
}
export declare class DeleteXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteXssMatchSetResponse?: shared.DeleteXssMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
