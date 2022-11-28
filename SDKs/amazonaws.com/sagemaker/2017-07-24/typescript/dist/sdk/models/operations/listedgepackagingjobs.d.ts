import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEdgePackagingJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEdgePackagingJobsXAmzTargetEnum {
    SageMakerListEdgePackagingJobs = "SageMaker.ListEdgePackagingJobs"
}
export declare class ListEdgePackagingJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEdgePackagingJobsXAmzTargetEnum;
}
export declare class ListEdgePackagingJobsRequest extends SpeakeasyBase {
    queryParams: ListEdgePackagingJobsQueryParams;
    headers: ListEdgePackagingJobsHeaders;
    request: shared.ListEdgePackagingJobsRequest;
}
export declare class ListEdgePackagingJobsResponse extends SpeakeasyBase {
    contentType: string;
    listEdgePackagingJobsResponse?: shared.ListEdgePackagingJobsResponse;
    statusCode: number;
}
