import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteReplicationJobXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteReplicationJob = "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob"
}
export declare class DeleteReplicationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationJobXAmzTargetEnum;
}
export declare class DeleteReplicationJobRequest extends SpeakeasyBase {
    headers: DeleteReplicationJobHeaders;
    request: shared.DeleteReplicationJobRequest;
}
export declare class DeleteReplicationJobResponse extends SpeakeasyBase {
    contentType: string;
    deleteReplicationJobResponse?: Map<string, any>;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    replicationJobNotFoundException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
