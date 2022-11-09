import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteIpSetXAmzTargetEnum {
    AwswafRegional20161128DeleteIpSet = "AWSWAF_Regional_20161128.DeleteIPSet"
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
