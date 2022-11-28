import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLabelingJobsForWorkteamQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListLabelingJobsForWorkteamXAmzTargetEnum {
    SageMakerListLabelingJobsForWorkteam = "SageMaker.ListLabelingJobsForWorkteam"
}
export declare class ListLabelingJobsForWorkteamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLabelingJobsForWorkteamXAmzTargetEnum;
}
export declare class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
    queryParams: ListLabelingJobsForWorkteamQueryParams;
    headers: ListLabelingJobsForWorkteamHeaders;
    request: shared.ListLabelingJobsForWorkteamRequest;
}
export declare class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    listLabelingJobsForWorkteamResponse?: shared.ListLabelingJobsForWorkteamResponse;
    resourceNotFound?: any;
    statusCode: number;
}
