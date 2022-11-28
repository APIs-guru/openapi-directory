import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelRotateSecretXAmzTargetEnum {
    SecretsmanagerCancelRotateSecret = "secretsmanager.CancelRotateSecret"
}
export declare class CancelRotateSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelRotateSecretXAmzTargetEnum;
}
export declare class CancelRotateSecretRequest extends SpeakeasyBase {
    headers: CancelRotateSecretHeaders;
    request: shared.CancelRotateSecretRequest;
}
export declare class CancelRotateSecretResponse extends SpeakeasyBase {
    cancelRotateSecretResponse?: shared.CancelRotateSecretResponse;
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
