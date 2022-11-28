import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProcessingJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProcessingJobsXAmzTargetEnum {
    SageMakerListProcessingJobs = "SageMaker.ListProcessingJobs"
}
export declare class ListProcessingJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProcessingJobsXAmzTargetEnum;
}
export declare class ListProcessingJobsRequest extends SpeakeasyBase {
    queryParams: ListProcessingJobsQueryParams;
    headers: ListProcessingJobsHeaders;
    request: shared.ListProcessingJobsRequest;
}
export declare class ListProcessingJobsResponse extends SpeakeasyBase {
    contentType: string;
    listProcessingJobsResponse?: shared.ListProcessingJobsResponse;
    statusCode: number;
}
