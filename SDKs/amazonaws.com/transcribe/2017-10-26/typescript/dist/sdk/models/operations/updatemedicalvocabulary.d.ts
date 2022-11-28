import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMedicalVocabularyXAmzTargetEnum {
    TranscribeUpdateMedicalVocabulary = "Transcribe.UpdateMedicalVocabulary"
}
export declare class UpdateMedicalVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMedicalVocabularyXAmzTargetEnum;
}
export declare class UpdateMedicalVocabularyRequest extends SpeakeasyBase {
    headers: UpdateMedicalVocabularyHeaders;
    request: shared.UpdateMedicalVocabularyRequest;
}
export declare class UpdateMedicalVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    updateMedicalVocabularyResponse?: shared.UpdateMedicalVocabularyResponse;
}
