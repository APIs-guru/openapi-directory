import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMedicalVocabularyXAmzTargetEnum {
    TranscribeGetMedicalVocabulary = "Transcribe.GetMedicalVocabulary"
}
export declare class GetMedicalVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMedicalVocabularyXAmzTargetEnum;
}
export declare class GetMedicalVocabularyRequest extends SpeakeasyBase {
    headers: GetMedicalVocabularyHeaders;
    request: shared.GetMedicalVocabularyRequest;
}
export declare class GetMedicalVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getMedicalVocabularyResponse?: shared.GetMedicalVocabularyResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
