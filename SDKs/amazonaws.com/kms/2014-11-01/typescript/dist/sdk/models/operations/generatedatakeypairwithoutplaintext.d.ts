import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum {
    TrentServiceGenerateDataKeyPairWithoutPlaintext = "TrentService.GenerateDataKeyPairWithoutPlaintext"
}
export declare class GenerateDataKeyPairWithoutPlaintextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum;
}
export declare class GenerateDataKeyPairWithoutPlaintextRequest extends SpeakeasyBase {
    headers: GenerateDataKeyPairWithoutPlaintextHeaders;
    request: shared.GenerateDataKeyPairWithoutPlaintextRequest;
}
export declare class GenerateDataKeyPairWithoutPlaintextResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    generateDataKeyPairWithoutPlaintextResponse?: shared.GenerateDataKeyPairWithoutPlaintextResponse;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
