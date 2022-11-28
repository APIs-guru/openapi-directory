import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEncryptionConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEncryptionConfigRequest extends SpeakeasyBase {
    headers: GetEncryptionConfigHeaders;
}
export declare class GetEncryptionConfigResponse extends SpeakeasyBase {
    contentType: string;
    getEncryptionConfigResult?: shared.GetEncryptionConfigResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
