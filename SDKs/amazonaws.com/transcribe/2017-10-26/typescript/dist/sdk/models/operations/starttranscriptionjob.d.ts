import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartTranscriptionJobXAmzTargetEnum {
    TranscribeStartTranscriptionJob = "Transcribe.StartTranscriptionJob"
}
export declare class StartTranscriptionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTranscriptionJobXAmzTargetEnum;
}
export declare class StartTranscriptionJobRequest extends SpeakeasyBase {
    headers: StartTranscriptionJobHeaders;
    request: shared.StartTranscriptionJobRequest;
}
export declare class StartTranscriptionJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    startTranscriptionJobResponse?: shared.StartTranscriptionJobResponse;
    statusCode: number;
}
