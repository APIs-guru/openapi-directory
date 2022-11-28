import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateVocabularyXAmzTargetEnum {
    TranscribeUpdateVocabulary = "Transcribe.UpdateVocabulary"
}
export declare class UpdateVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVocabularyXAmzTargetEnum;
}
export declare class UpdateVocabularyRequest extends SpeakeasyBase {
    headers: UpdateVocabularyHeaders;
    request: shared.UpdateVocabularyRequest;
}
export declare class UpdateVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    updateVocabularyResponse?: shared.UpdateVocabularyResponse;
}
