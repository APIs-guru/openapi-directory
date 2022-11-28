import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSecretXAmzTargetEnum {
    SecretsmanagerCreateSecret = "secretsmanager.CreateSecret"
}
export declare class CreateSecretHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecretXAmzTargetEnum;
}
export declare class CreateSecretRequest extends SpeakeasyBase {
    headers: CreateSecretHeaders;
    request: shared.CreateSecretRequest;
}
export declare class CreateSecretResponse extends SpeakeasyBase {
    contentType: string;
    createSecretResponse?: shared.CreateSecretResponse;
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
}
