import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReEncryptXAmzTargetEnum {
    TrentServiceReEncrypt = "TrentService.ReEncrypt"
}
export declare class ReEncryptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReEncryptXAmzTargetEnum;
}
export declare class ReEncryptRequest extends SpeakeasyBase {
    headers: ReEncryptHeaders;
    request: shared.ReEncryptRequest;
}
export declare class ReEncryptResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    incorrectKeyException?: any;
    invalidCiphertextException?: any;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    reEncryptResponse?: shared.ReEncryptResponse;
    statusCode: number;
}
