import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteIpSetXAmzTargetEnum {
    Awswaf20150824DeleteIpSet = "AWSWAF_20150824.DeleteIPSet"
}
export declare class DeleteIpSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIpSetXAmzTargetEnum;
}
export declare class DeleteIpSetRequest extends SpeakeasyBase {
    headers: DeleteIpSetHeaders;
    request: shared.DeleteIpSetRequest;
}
export declare class DeleteIpSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteIpSetResponse?: shared.DeleteIpSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
