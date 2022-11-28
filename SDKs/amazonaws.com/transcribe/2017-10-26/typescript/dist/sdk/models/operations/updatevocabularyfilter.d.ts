import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateVocabularyFilterXAmzTargetEnum {
    TranscribeUpdateVocabularyFilter = "Transcribe.UpdateVocabularyFilter"
}
export declare class UpdateVocabularyFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVocabularyFilterXAmzTargetEnum;
}
export declare class UpdateVocabularyFilterRequest extends SpeakeasyBase {
    headers: UpdateVocabularyFilterHeaders;
    request: shared.UpdateVocabularyFilterRequest;
}
export declare class UpdateVocabularyFilterResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    updateVocabularyFilterResponse?: shared.UpdateVocabularyFilterResponse;
}
