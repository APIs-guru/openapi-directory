import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHyperParameterTuningJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHyperParameterTuningJobsXAmzTargetEnum {
    SageMakerListHyperParameterTuningJobs = "SageMaker.ListHyperParameterTuningJobs"
}
export declare class ListHyperParameterTuningJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHyperParameterTuningJobsXAmzTargetEnum;
}
export declare class ListHyperParameterTuningJobsRequest extends SpeakeasyBase {
    queryParams: ListHyperParameterTuningJobsQueryParams;
    headers: ListHyperParameterTuningJobsHeaders;
    request: shared.ListHyperParameterTuningJobsRequest;
}
export declare class ListHyperParameterTuningJobsResponse extends SpeakeasyBase {
    contentType: string;
    listHyperParameterTuningJobsResponse?: shared.ListHyperParameterTuningJobsResponse;
    statusCode: number;
}
