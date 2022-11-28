import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartOnDemandAppReplicationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StartOnDemandAppReplication = "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication"
}
export declare class StartOnDemandAppReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartOnDemandAppReplicationXAmzTargetEnum;
}
export declare class StartOnDemandAppReplicationRequest extends SpeakeasyBase {
    headers: StartOnDemandAppReplicationHeaders;
    request: shared.StartOnDemandAppReplicationRequest;
}
export declare class StartOnDemandAppReplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    startOnDemandAppReplicationResponse?: Map<string, any>;
    statusCode: number;
    unauthorizedOperationException?: any;
}
