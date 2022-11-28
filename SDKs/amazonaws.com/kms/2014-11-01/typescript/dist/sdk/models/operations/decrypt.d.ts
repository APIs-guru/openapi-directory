import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DecryptXAmzTargetEnum {
    TrentServiceDecrypt = "TrentService.Decrypt"
}
export declare class DecryptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DecryptXAmzTargetEnum;
}
export declare class DecryptRequest extends SpeakeasyBase {
    headers: DecryptHeaders;
    request: shared.DecryptRequest;
}
export declare class DecryptResponse extends SpeakeasyBase {
    contentType: string;
    decryptResponse?: shared.DecryptResponse;
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
    statusCode: number;
}
