import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteRegexPatternSetXAmzTargetEnum {
    Awswaf20150824DeleteRegexPatternSet = "AWSWAF_20150824.DeleteRegexPatternSet"
}
export declare class DeleteRegexPatternSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegexPatternSetXAmzTargetEnum;
}
export declare class DeleteRegexPatternSetRequest extends SpeakeasyBase {
    headers: DeleteRegexPatternSetHeaders;
    request: shared.DeleteRegexPatternSetRequest;
}
export declare class DeleteRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteRegexPatternSetResponse?: shared.DeleteRegexPatternSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
