import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCallAnalyticsJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCallAnalyticsJobsXAmzTargetEnum {
    TranscribeListCallAnalyticsJobs = "Transcribe.ListCallAnalyticsJobs"
}
export declare class ListCallAnalyticsJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCallAnalyticsJobsXAmzTargetEnum;
}
export declare class ListCallAnalyticsJobsRequest extends SpeakeasyBase {
    queryParams: ListCallAnalyticsJobsQueryParams;
    headers: ListCallAnalyticsJobsHeaders;
    request: shared.ListCallAnalyticsJobsRequest;
}
export declare class ListCallAnalyticsJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listCallAnalyticsJobsResponse?: shared.ListCallAnalyticsJobsResponse;
    statusCode: number;
}
