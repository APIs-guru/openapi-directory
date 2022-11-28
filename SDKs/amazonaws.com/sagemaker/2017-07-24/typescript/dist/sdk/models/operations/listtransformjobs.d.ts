import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTransformJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTransformJobsXAmzTargetEnum {
    SageMakerListTransformJobs = "SageMaker.ListTransformJobs"
}
export declare class ListTransformJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTransformJobsXAmzTargetEnum;
}
export declare class ListTransformJobsRequest extends SpeakeasyBase {
    queryParams: ListTransformJobsQueryParams;
    headers: ListTransformJobsHeaders;
    request: shared.ListTransformJobsRequest;
}
export declare class ListTransformJobsResponse extends SpeakeasyBase {
    contentType: string;
    listTransformJobsResponse?: shared.ListTransformJobsResponse;
    statusCode: number;
}
