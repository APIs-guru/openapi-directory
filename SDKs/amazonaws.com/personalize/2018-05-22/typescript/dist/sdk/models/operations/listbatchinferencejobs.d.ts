import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListBatchInferenceJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListBatchInferenceJobsXAmzTargetEnum {
    AmazonPersonalizeListBatchInferenceJobs = "AmazonPersonalize.ListBatchInferenceJobs"
}
export declare class ListBatchInferenceJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBatchInferenceJobsXAmzTargetEnum;
}
export declare class ListBatchInferenceJobsRequest extends SpeakeasyBase {
    queryParams: ListBatchInferenceJobsQueryParams;
    headers: ListBatchInferenceJobsHeaders;
    request: shared.ListBatchInferenceJobsRequest;
}
export declare class ListBatchInferenceJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listBatchInferenceJobsResponse?: shared.ListBatchInferenceJobsResponse;
    statusCode: number;
}
