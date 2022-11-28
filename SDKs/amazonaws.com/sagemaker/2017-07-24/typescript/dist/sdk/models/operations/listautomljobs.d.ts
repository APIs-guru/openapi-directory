import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAutoMlJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAutoMlJobsXAmzTargetEnum {
    SageMakerListAutoMlJobs = "SageMaker.ListAutoMLJobs"
}
export declare class ListAutoMlJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAutoMlJobsXAmzTargetEnum;
}
export declare class ListAutoMlJobsRequest extends SpeakeasyBase {
    queryParams: ListAutoMlJobsQueryParams;
    headers: ListAutoMlJobsHeaders;
    request: shared.ListAutoMlJobsRequest;
}
export declare class ListAutoMlJobsResponse extends SpeakeasyBase {
    contentType: string;
    listAutoMlJobsResponse?: shared.ListAutoMlJobsResponse;
    statusCode: number;
}
