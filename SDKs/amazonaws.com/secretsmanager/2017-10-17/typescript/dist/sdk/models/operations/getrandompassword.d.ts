import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRandomPasswordXAmzTargetEnum {
    SecretsmanagerGetRandomPassword = "secretsmanager.GetRandomPassword"
}
export declare class GetRandomPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRandomPasswordXAmzTargetEnum;
}
export declare class GetRandomPasswordRequest extends SpeakeasyBase {
    headers: GetRandomPasswordHeaders;
    request: shared.GetRandomPasswordRequest;
}
export declare class GetRandomPasswordResponse extends SpeakeasyBase {
    contentType: string;
    getRandomPasswordResponse?: shared.GetRandomPasswordResponse;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
