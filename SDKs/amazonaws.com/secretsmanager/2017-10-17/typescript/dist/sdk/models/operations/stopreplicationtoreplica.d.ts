import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopReplicationToReplicaXAmzTargetEnum {
    SecretsmanagerStopReplicationToReplica = "secretsmanager.StopReplicationToReplica"
}
export declare class StopReplicationToReplicaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopReplicationToReplicaXAmzTargetEnum;
}
export declare class StopReplicationToReplicaRequest extends SpeakeasyBase {
    headers: StopReplicationToReplicaHeaders;
    request: shared.StopReplicationToReplicaRequest;
}
export declare class StopReplicationToReplicaResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopReplicationToReplicaResponse?: shared.StopReplicationToReplicaResponse;
}
