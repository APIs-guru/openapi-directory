import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetIpSetXAmzTargetEnum {
    AwswafRegional20161128GetIpSet = "AWSWAF_Regional_20161128.GetIPSet"
}
export declare class GetIpSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIpSetXAmzTargetEnum;
}
export declare class GetIpSetRequest extends SpeakeasyBase {
    headers: GetIpSetHeaders;
    request: shared.GetIpSetRequest;
}
export declare class GetIpSetResponse extends SpeakeasyBase {
    contentType: string;
    getIpSetResponse?: shared.GetIpSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
