import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeGetMedicalTranscriptionJob = "Transcribe.GetMedicalTranscriptionJob"
}
export declare class GetMedicalTranscriptionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMedicalTranscriptionJobXAmzTargetEnum;
}
export declare class GetMedicalTranscriptionJobRequest extends SpeakeasyBase {
    headers: GetMedicalTranscriptionJobHeaders;
    request: shared.GetMedicalTranscriptionJobRequest;
}
export declare class GetMedicalTranscriptionJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getMedicalTranscriptionJobResponse?: shared.GetMedicalTranscriptionJobResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
