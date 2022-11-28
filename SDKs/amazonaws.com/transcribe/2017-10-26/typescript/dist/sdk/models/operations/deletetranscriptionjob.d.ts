import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTranscriptionJobXAmzTargetEnum {
    TranscribeDeleteTranscriptionJob = "Transcribe.DeleteTranscriptionJob"
}
export declare class DeleteTranscriptionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTranscriptionJobXAmzTargetEnum;
}
export declare class DeleteTranscriptionJobRequest extends SpeakeasyBase {
    headers: DeleteTranscriptionJobHeaders;
    request: shared.DeleteTranscriptionJobRequest;
}
export declare class DeleteTranscriptionJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
