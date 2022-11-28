import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateRandomXAmzTargetEnum {
    TrentServiceGenerateRandom = "TrentService.GenerateRandom"
}
export declare class GenerateRandomHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateRandomXAmzTargetEnum;
}
export declare class GenerateRandomRequest extends SpeakeasyBase {
    headers: GenerateRandomHeaders;
    request: shared.GenerateRandomRequest;
}
export declare class GenerateRandomResponse extends SpeakeasyBase {
    contentType: string;
    customKeyStoreInvalidStateException?: any;
    customKeyStoreNotFoundException?: any;
    dependencyTimeoutException?: any;
    generateRandomResponse?: shared.GenerateRandomResponse;
    kmsInternalException?: any;
    statusCode: number;
}
