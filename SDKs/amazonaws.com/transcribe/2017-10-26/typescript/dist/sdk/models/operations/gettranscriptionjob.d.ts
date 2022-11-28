import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTranscriptionJobXAmzTargetEnum {
    TranscribeGetTranscriptionJob = "Transcribe.GetTranscriptionJob"
}
export declare class GetTranscriptionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTranscriptionJobXAmzTargetEnum;
}
export declare class GetTranscriptionJobRequest extends SpeakeasyBase {
    headers: GetTranscriptionJobHeaders;
    request: shared.GetTranscriptionJobRequest;
}
export declare class GetTranscriptionJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getTranscriptionJobResponse?: shared.GetTranscriptionJobResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
