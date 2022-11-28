import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateDataKeyXAmzTargetEnum {
    TrentServiceGenerateDataKey = "TrentService.GenerateDataKey"
}
export declare class GenerateDataKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyXAmzTargetEnum;
}
export declare class GenerateDataKeyRequest extends SpeakeasyBase {
    headers: GenerateDataKeyHeaders;
    request: shared.GenerateDataKeyRequest;
}
export declare class GenerateDataKeyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    disabledException?: any;
    generateDataKeyResponse?: shared.GenerateDataKeyResponse;
    invalidGrantTokenException?: any;
    invalidKeyUsageException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    keyUnavailableException?: any;
    notFoundException?: any;
    statusCode: number;
}
