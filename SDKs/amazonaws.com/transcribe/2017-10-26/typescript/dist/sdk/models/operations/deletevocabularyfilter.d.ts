import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVocabularyFilterXAmzTargetEnum {
    TranscribeDeleteVocabularyFilter = "Transcribe.DeleteVocabularyFilter"
}
export declare class DeleteVocabularyFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVocabularyFilterXAmzTargetEnum;
}
export declare class DeleteVocabularyFilterRequest extends SpeakeasyBase {
    headers: DeleteVocabularyFilterHeaders;
    request: shared.DeleteVocabularyFilterRequest;
}
export declare class DeleteVocabularyFilterResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
