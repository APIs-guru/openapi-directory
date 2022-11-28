import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMedicalTranscriptionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMedicalTranscriptionJobsXAmzTargetEnum {
    TranscribeListMedicalTranscriptionJobs = "Transcribe.ListMedicalTranscriptionJobs"
}
export declare class ListMedicalTranscriptionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMedicalTranscriptionJobsXAmzTargetEnum;
}
export declare class ListMedicalTranscriptionJobsRequest extends SpeakeasyBase {
    queryParams: ListMedicalTranscriptionJobsQueryParams;
    headers: ListMedicalTranscriptionJobsHeaders;
    request: shared.ListMedicalTranscriptionJobsRequest;
}
export declare class ListMedicalTranscriptionJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listMedicalTranscriptionJobsResponse?: shared.ListMedicalTranscriptionJobsResponse;
    statusCode: number;
}
