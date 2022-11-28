import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEncryptionConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutEncryptionConfigRequestBodyTypeEnum {
    None = "NONE",
    Kms = "KMS"
}
export declare class PutEncryptionConfigRequestBody extends SpeakeasyBase {
    keyId?: string;
    type: PutEncryptionConfigRequestBodyTypeEnum;
}
export declare class PutEncryptionConfigRequest extends SpeakeasyBase {
    headers: PutEncryptionConfigHeaders;
    request: PutEncryptionConfigRequestBody;
}
export declare class PutEncryptionConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    putEncryptionConfigResult?: shared.PutEncryptionConfigResult;
    statusCode: number;
    throttledException?: any;
}
