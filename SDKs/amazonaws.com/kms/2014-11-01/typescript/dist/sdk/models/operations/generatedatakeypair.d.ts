import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateDataKeyPairXAmzTargetEnum {
    TrentServiceGenerateDataKeyPair = "TrentService.GenerateDataKeyPair"
}
export declare class GenerateDataKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyPairXAmzTargetEnum;
}
export declare class GenerateDataKeyPairRequest extends SpeakeasyBase {
    headers: GenerateDataKeyPairHeaders;
    request: shared.GenerateDataKeyPairRequest;
}
export declare class GenerateDataKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    generateDataKeyPairResponse?: shared.GenerateDataKeyPairResponse;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
