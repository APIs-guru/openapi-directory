import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReplicationRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetReplicationRunsXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetReplicationRuns = "AWSServerMigrationService_V2016_10_24.GetReplicationRuns"
}
export declare class GetReplicationRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReplicationRunsXAmzTargetEnum;
}
export declare class GetReplicationRunsRequest extends SpeakeasyBase {
    queryParams: GetReplicationRunsQueryParams;
    headers: GetReplicationRunsHeaders;
    request: shared.GetReplicationRunsRequest;
}
export declare class GetReplicationRunsResponse extends SpeakeasyBase {
    contentType: string;
    getReplicationRunsResponse?: shared.GetReplicationRunsResponse;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
