import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMedicalVocabularyXAmzTargetEnum {
    TranscribeDeleteMedicalVocabulary = "Transcribe.DeleteMedicalVocabulary"
}
export declare class DeleteMedicalVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMedicalVocabularyXAmzTargetEnum;
}
export declare class DeleteMedicalVocabularyRequest extends SpeakeasyBase {
    headers: DeleteMedicalVocabularyHeaders;
    request: shared.DeleteMedicalVocabularyRequest;
}
export declare class DeleteMedicalVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
