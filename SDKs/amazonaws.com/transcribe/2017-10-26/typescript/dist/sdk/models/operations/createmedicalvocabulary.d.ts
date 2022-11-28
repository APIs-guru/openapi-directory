import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMedicalVocabularyXAmzTargetEnum {
    TranscribeCreateMedicalVocabulary = "Transcribe.CreateMedicalVocabulary"
}
export declare class CreateMedicalVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMedicalVocabularyXAmzTargetEnum;
}
export declare class CreateMedicalVocabularyRequest extends SpeakeasyBase {
    headers: CreateMedicalVocabularyHeaders;
    request: shared.CreateMedicalVocabularyRequest;
}
export declare class CreateMedicalVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createMedicalVocabularyResponse?: shared.CreateMedicalVocabularyResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
