import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateDataKeyWithoutPlaintextXAmzTargetEnum {
    TrentServiceGenerateDataKeyWithoutPlaintext = "TrentService.GenerateDataKeyWithoutPlaintext"
}
export declare class GenerateDataKeyWithoutPlaintextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyWithoutPlaintextXAmzTargetEnum;
}
export declare class GenerateDataKeyWithoutPlaintextRequest extends SpeakeasyBase {
    headers: GenerateDataKeyWithoutPlaintextHeaders;
    request: shared.GenerateDataKeyWithoutPlaintextRequest;
}
export declare class GenerateDataKeyWithoutPlaintextResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    generateDataKeyWithoutPlaintextResponse?: shared.GenerateDataKeyWithoutPlaintextResponse;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
}
