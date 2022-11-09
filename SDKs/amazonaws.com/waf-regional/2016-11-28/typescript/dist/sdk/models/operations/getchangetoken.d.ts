import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetChangeTokenXAmzTargetEnum {
    AwswafRegional20161128GetChangeToken = "AWSWAF_Regional_20161128.GetChangeToken"
}
export declare class GetChangeTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetChangeTokenXAmzTargetEnum;
}
export declare class GetChangeTokenRequest extends SpeakeasyBase {
    headers: GetChangeTokenHeaders;
    request: Map<string, any>;
}
export declare class GetChangeTokenResponse extends SpeakeasyBase {
    contentType: string;
    getChangeTokenResponse?: shared.GetChangeTokenResponse;
    statusCode: number;
    wafInternalErrorException?: any;
}
