import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RestoreSecretXAmzTargetEnum {
    SecretsmanagerRestoreSecret = "secretsmanager.RestoreSecret"
}
export declare class RestoreSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreSecretXAmzTargetEnum;
}
export declare class RestoreSecretRequest extends SpeakeasyBase {
    headers: RestoreSecretHeaders;
    request: shared.RestoreSecretRequest;
}
export declare class RestoreSecretResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    restoreSecretResponse?: shared.RestoreSecretResponse;
    statusCode: number;
}
