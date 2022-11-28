import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTranscriptionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTranscriptionJobsXAmzTargetEnum {
    TranscribeListTranscriptionJobs = "Transcribe.ListTranscriptionJobs"
}
export declare class ListTranscriptionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTranscriptionJobsXAmzTargetEnum;
}
export declare class ListTranscriptionJobsRequest extends SpeakeasyBase {
    queryParams: ListTranscriptionJobsQueryParams;
    headers: ListTranscriptionJobsHeaders;
    request: shared.ListTranscriptionJobsRequest;
}
export declare class ListTranscriptionJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listTranscriptionJobsResponse?: shared.ListTranscriptionJobsResponse;
    statusCode: number;
}
