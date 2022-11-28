import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLabelingJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListLabelingJobsXAmzTargetEnum {
    SageMakerListLabelingJobs = "SageMaker.ListLabelingJobs"
}
export declare class ListLabelingJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLabelingJobsXAmzTargetEnum;
}
export declare class ListLabelingJobsRequest extends SpeakeasyBase {
    queryParams: ListLabelingJobsQueryParams;
    headers: ListLabelingJobsHeaders;
    request: shared.ListLabelingJobsRequest;
}
export declare class ListLabelingJobsResponse extends SpeakeasyBase {
    contentType: string;
    listLabelingJobsResponse?: shared.ListLabelingJobsResponse;
    statusCode: number;
}
