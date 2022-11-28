import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartOnDemandReplicationRunXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StartOnDemandReplicationRun = "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun"
}
export declare class StartOnDemandReplicationRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartOnDemandReplicationRunXAmzTargetEnum;
}
export declare class StartOnDemandReplicationRunRequest extends SpeakeasyBase {
    headers: StartOnDemandReplicationRunHeaders;
    request: shared.StartOnDemandReplicationRunRequest;
}
export declare class StartOnDemandReplicationRunResponse extends SpeakeasyBase {
    contentType: string;
    dryRunOperationException?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    replicationRunLimitExceededException?: any;
    startOnDemandReplicationRunResponse?: shared.StartOnDemandReplicationRunResponse;
    statusCode: number;
    unauthorizedOperationException?: any;
}
