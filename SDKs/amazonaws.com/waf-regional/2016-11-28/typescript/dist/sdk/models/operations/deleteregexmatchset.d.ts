import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteRegexMatchSetXAmzTargetEnum {
    AwswafRegional20161128DeleteRegexMatchSet = "AWSWAF_Regional_20161128.DeleteRegexMatchSet"
}
export declare class DeleteRegexMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegexMatchSetXAmzTargetEnum;
}
export declare class DeleteRegexMatchSetRequest extends SpeakeasyBase {
    headers: DeleteRegexMatchSetHeaders;
    request: shared.DeleteRegexMatchSetRequest;
}
export declare class DeleteRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteRegexMatchSetResponse?: shared.DeleteRegexMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
