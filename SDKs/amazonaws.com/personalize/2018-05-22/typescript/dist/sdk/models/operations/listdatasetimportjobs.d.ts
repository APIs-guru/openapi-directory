import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDatasetImportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatasetImportJobsXAmzTargetEnum {
    AmazonPersonalizeListDatasetImportJobs = "AmazonPersonalize.ListDatasetImportJobs"
}
export declare class ListDatasetImportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetImportJobsXAmzTargetEnum;
}
export declare class ListDatasetImportJobsRequest extends SpeakeasyBase {
    queryParams: ListDatasetImportJobsQueryParams;
    headers: ListDatasetImportJobsHeaders;
    request: shared.ListDatasetImportJobsRequest;
}
export declare class ListDatasetImportJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listDatasetImportJobsResponse?: shared.ListDatasetImportJobsResponse;
    statusCode: number;
}
