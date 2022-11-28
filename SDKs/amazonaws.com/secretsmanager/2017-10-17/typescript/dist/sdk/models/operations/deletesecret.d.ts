import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSecretXAmzTargetEnum {
    SecretsmanagerDeleteSecret = "secretsmanager.DeleteSecret"
}
export declare class DeleteSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecretXAmzTargetEnum;
}
export declare class DeleteSecretRequest extends SpeakeasyBase {
    headers: DeleteSecretHeaders;
    request: shared.DeleteSecretRequest;
}
export declare class DeleteSecretResponse extends SpeakeasyBase {
    contentType: string;
    deleteSecretResponse?: shared.DeleteSecretResponse;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
