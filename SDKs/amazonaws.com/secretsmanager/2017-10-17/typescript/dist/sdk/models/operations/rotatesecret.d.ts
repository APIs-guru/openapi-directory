import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RotateSecretXAmzTargetEnum {
    SecretsmanagerRotateSecret = "secretsmanager.RotateSecret"
}
export declare class RotateSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RotateSecretXAmzTargetEnum;
}
export declare class RotateSecretRequest extends SpeakeasyBase {
    headers: RotateSecretHeaders;
    request: shared.RotateSecretRequest;
}
export declare class RotateSecretResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    rotateSecretResponse?: shared.RotateSecretResponse;
    statusCode: number;
}
