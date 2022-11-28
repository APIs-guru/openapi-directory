import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartAppReplicationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StartAppReplication = "AWSServerMigrationService_V2016_10_24.StartAppReplication"
}
export declare class StartAppReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAppReplicationXAmzTargetEnum;
}
export declare class StartAppReplicationRequest extends SpeakeasyBase {
    headers: StartAppReplicationHeaders;
    request: shared.StartAppReplicationRequest;
}
export declare class StartAppReplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    startAppReplicationResponse?: Map<string, any>;
    statusCode: number;
    unauthorizedOperationException?: any;
}
