import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ReplicateSecretToRegionsXAmzTargetEnum {
    SecretsmanagerReplicateSecretToRegions = "secretsmanager.ReplicateSecretToRegions"
}
export declare class ReplicateSecretToRegionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReplicateSecretToRegionsXAmzTargetEnum;
}
export declare class ReplicateSecretToRegionsRequest extends SpeakeasyBase {
    headers: ReplicateSecretToRegionsHeaders;
    request: shared.ReplicateSecretToRegionsRequest;
}
export declare class ReplicateSecretToRegionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    replicateSecretToRegionsResponse?: shared.ReplicateSecretToRegionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
