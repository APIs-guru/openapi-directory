import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeDeleteMedicalTranscriptionJob = "Transcribe.DeleteMedicalTranscriptionJob"
}
export declare class DeleteMedicalTranscriptionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMedicalTranscriptionJobXAmzTargetEnum;
}
export declare class DeleteMedicalTranscriptionJobRequest extends SpeakeasyBase {
    headers: DeleteMedicalTranscriptionJobHeaders;
    request: shared.DeleteMedicalTranscriptionJobRequest;
}
export declare class DeleteMedicalTranscriptionJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
