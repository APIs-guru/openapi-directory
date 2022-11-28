import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTrainingJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTrainingJobsXAmzTargetEnum {
    SageMakerListTrainingJobs = "SageMaker.ListTrainingJobs"
}
export declare class ListTrainingJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTrainingJobsXAmzTargetEnum;
}
export declare class ListTrainingJobsRequest extends SpeakeasyBase {
    queryParams: ListTrainingJobsQueryParams;
    headers: ListTrainingJobsHeaders;
    request: shared.ListTrainingJobsRequest;
}
export declare class ListTrainingJobsResponse extends SpeakeasyBase {
    contentType: string;
    listTrainingJobsResponse?: shared.ListTrainingJobsResponse;
    statusCode: number;
}
