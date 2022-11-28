import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDataIngestionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDataIngestionJobsXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceListDataIngestionJobs = "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs"
}
export declare class ListDataIngestionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDataIngestionJobsXAmzTargetEnum;
}
export declare class ListDataIngestionJobsRequest extends SpeakeasyBase {
    queryParams: ListDataIngestionJobsQueryParams;
    headers: ListDataIngestionJobsHeaders;
    request: shared.ListDataIngestionJobsRequest;
}
export declare class ListDataIngestionJobsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listDataIngestionJobsResponse?: shared.ListDataIngestionJobsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
