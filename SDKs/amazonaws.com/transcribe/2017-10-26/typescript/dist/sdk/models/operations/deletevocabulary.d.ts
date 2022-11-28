import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVocabularyXAmzTargetEnum {
    TranscribeDeleteVocabulary = "Transcribe.DeleteVocabulary"
}
export declare class DeleteVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVocabularyXAmzTargetEnum;
}
export declare class DeleteVocabularyRequest extends SpeakeasyBase {
    headers: DeleteVocabularyHeaders;
    request: shared.DeleteVocabularyRequest;
}
export declare class DeleteVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
