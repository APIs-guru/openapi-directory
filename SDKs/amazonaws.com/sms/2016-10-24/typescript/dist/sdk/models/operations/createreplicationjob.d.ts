import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateReplicationJobXAmzTargetEnum {
    AwsServerMigrationServiceV20161024CreateReplicationJob = "AWSServerMigrationService_V2016_10_24.CreateReplicationJob"
}
export declare class CreateReplicationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationJobXAmzTargetEnum;
}
export declare class CreateReplicationJobRequest extends SpeakeasyBase {
    headers: CreateReplicationJobHeaders;
    request: shared.CreateReplicationJobRequest;
}
export declare class CreateReplicationJobResponse extends SpeakeasyBase {
    contentType: string;
    createReplicationJobResponse?: shared.CreateReplicationJobResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    noConnectorsAvailableException?: any;
    operationNotPermittedException?: any;
    replicationJobAlreadyExistsException?: any;
    serverCannotBeReplicatedException?: any;
    statusCode: number;
    temporarilyUnavailableException?: any;
    unauthorizedOperationException?: any;
}
