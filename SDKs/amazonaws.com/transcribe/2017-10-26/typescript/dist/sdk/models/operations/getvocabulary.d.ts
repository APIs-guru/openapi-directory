import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVocabularyXAmzTargetEnum {
    TranscribeGetVocabulary = "Transcribe.GetVocabulary"
}
export declare class GetVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetVocabularyXAmzTargetEnum;
}
export declare class GetVocabularyRequest extends SpeakeasyBase {
    headers: GetVocabularyHeaders;
    request: shared.GetVocabularyRequest;
}
export declare class GetVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getVocabularyResponse?: shared.GetVocabularyResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
