import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopAppReplicationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StopAppReplication = "AWSServerMigrationService_V2016_10_24.StopAppReplication"
}
export declare class StopAppReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAppReplicationXAmzTargetEnum;
}
export declare class StopAppReplicationRequest extends SpeakeasyBase {
    headers: StopAppReplicationHeaders;
    request: shared.StopAppReplicationRequest;
}
export declare class StopAppReplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    stopAppReplicationResponse?: Map<string, any>;
    unauthorizedOperationException?: any;
}
