import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSecretXAmzTargetEnum {
    SecretsmanagerUpdateSecret = "secretsmanager.UpdateSecret"
}
export declare class UpdateSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSecretXAmzTargetEnum;
}
export declare class UpdateSecretRequest extends SpeakeasyBase {
    headers: UpdateSecretHeaders;
    request: shared.UpdateSecretRequest;
}
export declare class UpdateSecretResponse extends SpeakeasyBase {
    contentType: string;
    encryptionFailure?: any;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    malformedPolicyDocumentException?: any;
    preconditionNotMetException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateSecretResponse?: shared.UpdateSecretResponse;
}
