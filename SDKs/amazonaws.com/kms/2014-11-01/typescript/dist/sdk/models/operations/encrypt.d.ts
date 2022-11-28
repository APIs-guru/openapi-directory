import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EncryptXAmzTargetEnum {
    TrentServiceEncrypt = "TrentService.Encrypt"
}
export declare class EncryptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EncryptXAmzTargetEnum;
}
export declare class EncryptRequest extends SpeakeasyBase {
    headers: EncryptHeaders;
    request: shared.EncryptRequest;
}
export declare class EncryptResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    encryptResponse?: shared.EncryptResponse;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
}
