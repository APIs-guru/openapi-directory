import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSecretVersionStageXAmzTargetEnum {
    SecretsmanagerUpdateSecretVersionStage = "secretsmanager.UpdateSecretVersionStage"
}
export declare class UpdateSecretVersionStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSecretVersionStageXAmzTargetEnum;
}
export declare class UpdateSecretVersionStageRequest extends SpeakeasyBase {
    headers: UpdateSecretVersionStageHeaders;
    request: shared.UpdateSecretVersionStageRequest;
}
export declare class UpdateSecretVersionStageResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateSecretVersionStageResponse?: shared.UpdateSecretVersionStageResponse;
}
