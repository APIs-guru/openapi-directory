import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasetExportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatasetExportJobsXAmzTargetEnum {
    AmazonPersonalizeListDatasetExportJobs = "AmazonPersonalize.ListDatasetExportJobs"
}
export declare class ListDatasetExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetExportJobsXAmzTargetEnum;
}
export declare class ListDatasetExportJobsRequest extends SpeakeasyBase {
    queryParams: ListDatasetExportJobsQueryParams;
    headers: ListDatasetExportJobsHeaders;
    request: shared.ListDatasetExportJobsRequest;
}
export declare class ListDatasetExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listDatasetExportJobsResponse?: shared.ListDatasetExportJobsResponse;
    statusCode: number;
}
