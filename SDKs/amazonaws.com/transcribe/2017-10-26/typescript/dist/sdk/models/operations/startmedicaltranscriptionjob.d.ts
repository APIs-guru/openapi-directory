import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeStartMedicalTranscriptionJob = "Transcribe.StartMedicalTranscriptionJob"
}
export declare class StartMedicalTranscriptionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMedicalTranscriptionJobXAmzTargetEnum;
}
export declare class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
    headers: StartMedicalTranscriptionJobHeaders;
    request: shared.StartMedicalTranscriptionJobRequest;
}
export declare class StartMedicalTranscriptionJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    startMedicalTranscriptionJobResponse?: shared.StartMedicalTranscriptionJobResponse;
    statusCode: number;
}
