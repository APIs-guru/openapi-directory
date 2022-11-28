import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDefaultEncryptionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum {
    SitewiseDefaultEncryption = "SITEWISE_DEFAULT_ENCRYPTION",
    KmsBasedEncryption = "KMS_BASED_ENCRYPTION"
}
export declare class PutDefaultEncryptionConfigurationRequestBody extends SpeakeasyBase {
    encryptionType: PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum;
    kmsKeyId?: string;
}
export declare class PutDefaultEncryptionConfigurationRequest extends SpeakeasyBase {
    headers: PutDefaultEncryptionConfigurationHeaders;
    request: PutDefaultEncryptionConfigurationRequestBody;
}
export declare class PutDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    putDefaultEncryptionConfigurationResponse?: shared.PutDefaultEncryptionConfigurationResponse;
    statusCode: number;
    throttlingException?: any;
}
