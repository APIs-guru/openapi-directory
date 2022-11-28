import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVocabularyFilterXAmzTargetEnum {
    TranscribeGetVocabularyFilter = "Transcribe.GetVocabularyFilter"
}
export declare class GetVocabularyFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetVocabularyFilterXAmzTargetEnum;
}
export declare class GetVocabularyFilterRequest extends SpeakeasyBase {
    headers: GetVocabularyFilterHeaders;
    request: shared.GetVocabularyFilterRequest;
}
export declare class GetVocabularyFilterResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getVocabularyFilterResponse?: shared.GetVocabularyFilterResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
