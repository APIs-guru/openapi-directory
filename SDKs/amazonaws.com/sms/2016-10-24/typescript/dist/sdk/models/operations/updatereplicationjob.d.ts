import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateReplicationJobXAmzTargetEnum {
    AwsServerMigrationServiceV20161024UpdateReplicationJob = "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob"
}
export declare class UpdateReplicationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateReplicationJobXAmzTargetEnum;
}
export declare class UpdateReplicationJobRequest extends SpeakeasyBase {
    headers: UpdateReplicationJobHeaders;
    request: shared.UpdateReplicationJobRequest;
}
export declare class UpdateReplicationJobResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    replicationJobNotFoundException?: any;
    serverCannotBeReplicatedException?: any;
    statusCode: number;
    temporarilyUnavailableException?: any;
    unauthorizedOperationException?: any;
    updateReplicationJobResponse?: Map<string, any>;
}
