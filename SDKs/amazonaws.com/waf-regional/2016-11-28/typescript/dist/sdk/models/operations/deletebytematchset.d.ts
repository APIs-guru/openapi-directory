import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteByteMatchSetXAmzTargetEnum {
    AwswafRegional20161128DeleteByteMatchSet = "AWSWAF_Regional_20161128.DeleteByteMatchSet"
}
export declare class DeleteByteMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteByteMatchSetXAmzTargetEnum;
}
export declare class DeleteByteMatchSetRequest extends SpeakeasyBase {
    headers: DeleteByteMatchSetHeaders;
    request: shared.DeleteByteMatchSetRequest;
}
export declare class DeleteByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteByteMatchSetResponse?: shared.DeleteByteMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
