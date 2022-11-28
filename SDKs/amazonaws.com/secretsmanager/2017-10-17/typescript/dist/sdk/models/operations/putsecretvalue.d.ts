import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutSecretValueXAmzTargetEnum {
    SecretsmanagerPutSecretValue = "secretsmanager.PutSecretValue"
}
export declare class PutSecretValueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutSecretValueXAmzTargetEnum;
}
export declare class PutSecretValueRequest extends SpeakeasyBase {
    headers: PutSecretValueHeaders;
    request: shared.PutSecretValueRequest;
}
export declare class PutSecretValueResponse extends SpeakeasyBase {
    contentType: string;
    encryptionFailure?: any;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    putSecretValueResponse?: shared.PutSecretValueResponse;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
