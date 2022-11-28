import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCompilationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCompilationJobsXAmzTargetEnum {
    SageMakerListCompilationJobs = "SageMaker.ListCompilationJobs"
}
export declare class ListCompilationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCompilationJobsXAmzTargetEnum;
}
export declare class ListCompilationJobsRequest extends SpeakeasyBase {
    queryParams: ListCompilationJobsQueryParams;
    headers: ListCompilationJobsHeaders;
    request: shared.ListCompilationJobsRequest;
}
export declare class ListCompilationJobsResponse extends SpeakeasyBase {
    contentType: string;
    listCompilationJobsResponse?: shared.ListCompilationJobsResponse;
    statusCode: number;
}
