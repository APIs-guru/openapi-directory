import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateKeyXAmzTargetEnum {
    TrentServiceCreateKey = "TrentService.CreateKey"
}
export declare class CreateKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateKeyXAmzTargetEnum;
}
export declare class CreateKeyRequest extends SpeakeasyBase {
    headers: CreateKeyHeaders;
    request: shared.CreateKeyRequest;
}
export declare class CreateKeyResponse extends SpeakeasyBase {
    cloudHsmClusterInvalidConfigurationException?: any;
    contentType: string;
    createKeyResponse?: shared.CreateKeyResponse;
    customKeyStoreInvalidStateException?: any;
    customKeyStoreNotFoundException?: any;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    limitExceededException?: any;
    malformedPolicyDocumentException?: any;
    statusCode: number;
    tagException?: any;
    unsupportedOperationException?: any;
}
