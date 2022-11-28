import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetChangeTokenStatusXAmzTargetEnum {
    Awswaf20150824GetChangeTokenStatus = "AWSWAF_20150824.GetChangeTokenStatus"
}
export declare class GetChangeTokenStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetChangeTokenStatusXAmzTargetEnum;
}
export declare class GetChangeTokenStatusRequest extends SpeakeasyBase {
    headers: GetChangeTokenStatusHeaders;
    request: shared.GetChangeTokenStatusRequest;
}
export declare class GetChangeTokenStatusResponse extends SpeakeasyBase {
    contentType: string;
    getChangeTokenStatusResponse?: shared.GetChangeTokenStatusResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
}
