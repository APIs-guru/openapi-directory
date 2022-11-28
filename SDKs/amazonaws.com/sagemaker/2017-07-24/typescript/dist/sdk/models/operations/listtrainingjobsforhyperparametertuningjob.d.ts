import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTrainingJobsForHyperParameterTuningJobQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum {
    SageMakerListTrainingJobsForHyperParameterTuningJob = "SageMaker.ListTrainingJobsForHyperParameterTuningJob"
}
export declare class ListTrainingJobsForHyperParameterTuningJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum;
}
export declare class ListTrainingJobsForHyperParameterTuningJobRequest extends SpeakeasyBase {
    queryParams: ListTrainingJobsForHyperParameterTuningJobQueryParams;
    headers: ListTrainingJobsForHyperParameterTuningJobHeaders;
    request: shared.ListTrainingJobsForHyperParameterTuningJobRequest;
}
export declare class ListTrainingJobsForHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    listTrainingJobsForHyperParameterTuningJobResponse?: shared.ListTrainingJobsForHyperParameterTuningJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
