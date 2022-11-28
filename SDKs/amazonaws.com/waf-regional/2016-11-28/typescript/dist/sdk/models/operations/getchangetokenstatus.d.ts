import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetChangeTokenStatusXAmzTargetEnum {
    AwswafRegional20161128GetChangeTokenStatus = "AWSWAF_Regional_20161128.GetChangeTokenStatus"
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
