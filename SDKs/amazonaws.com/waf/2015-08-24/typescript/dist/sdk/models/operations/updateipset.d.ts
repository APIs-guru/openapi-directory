import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateIpSetXAmzTargetEnum {
    Awswaf20150824UpdateIpSet = "AWSWAF_20150824.UpdateIPSet"
}
export declare class UpdateIpSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateIpSetXAmzTargetEnum;
}
export declare class UpdateIpSetRequest extends SpeakeasyBase {
    headers: UpdateIpSetHeaders;
    request: shared.UpdateIpSetRequest;
}
export declare class UpdateIpSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateIpSetResponse?: shared.UpdateIpSetResponse;
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
