import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetSecretValueXAmzTargetEnum {
    SecretsmanagerGetSecretValue = "secretsmanager.GetSecretValue"
}
export declare class GetSecretValueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecretValueXAmzTargetEnum;
}
export declare class GetSecretValueRequest extends SpeakeasyBase {
    headers: GetSecretValueHeaders;
    request: shared.GetSecretValueRequest;
}
export declare class GetSecretValueResponse extends SpeakeasyBase {
    contentType: string;
    decryptionFailure?: any;
    getSecretValueResponse?: shared.GetSecretValueResponse;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
