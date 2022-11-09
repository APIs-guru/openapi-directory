import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReplicationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetReplicationJobsXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetReplicationJobs = "AWSServerMigrationService_V2016_10_24.GetReplicationJobs"
}
export declare class GetReplicationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReplicationJobsXAmzTargetEnum;
}
export declare class GetReplicationJobsRequest extends SpeakeasyBase {
    queryParams: GetReplicationJobsQueryParams;
    headers: GetReplicationJobsHeaders;
    request: shared.GetReplicationJobsRequest;
}
export declare class GetReplicationJobsResponse extends SpeakeasyBase {
    contentType: string;
    getReplicationJobsResponse?: shared.GetReplicationJobsResponse;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
