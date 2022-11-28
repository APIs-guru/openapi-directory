import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVocabularyFilterXAmzTargetEnum {
    TranscribeCreateVocabularyFilter = "Transcribe.CreateVocabularyFilter"
}
export declare class CreateVocabularyFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVocabularyFilterXAmzTargetEnum;
}
export declare class CreateVocabularyFilterRequest extends SpeakeasyBase {
    headers: CreateVocabularyFilterHeaders;
    request: shared.CreateVocabularyFilterRequest;
}
export declare class CreateVocabularyFilterResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createVocabularyFilterResponse?: shared.CreateVocabularyFilterResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
