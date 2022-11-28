import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum VerifyXAmzTargetEnum {
    TrentServiceVerify = "TrentService.Verify"
}
export declare class VerifyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifyXAmzTargetEnum;
}
export declare class VerifyRequest extends SpeakeasyBase {
    headers: VerifyHeaders;
    request: shared.VerifyRequest;
}
export declare class VerifyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidSignatureException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
    verifyResponse?: shared.VerifyResponse;
}
