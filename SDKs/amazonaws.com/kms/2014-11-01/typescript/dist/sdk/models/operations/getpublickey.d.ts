import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPublicKeyXAmzTargetEnum {
    TrentServiceGetPublicKey = "TrentService.GetPublicKey"
}
export declare class GetPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPublicKeyXAmzTargetEnum;
}
export declare class GetPublicKeyRequest extends SpeakeasyBase {
    headers: GetPublicKeyHeaders;
    request: shared.GetPublicKeyRequest;
}
export declare class GetPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    getPublicKeyResponse?: shared.GetPublicKeyResponse;
    invalidArnException?: any;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
