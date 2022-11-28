import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVocabularyXAmzTargetEnum {
    TranscribeCreateVocabulary = "Transcribe.CreateVocabulary"
}
export declare class CreateVocabularyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVocabularyXAmzTargetEnum;
}
export declare class CreateVocabularyRequest extends SpeakeasyBase {
    headers: CreateVocabularyHeaders;
    request: shared.CreateVocabularyRequest;
}
export declare class CreateVocabularyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createVocabularyResponse?: shared.CreateVocabularyResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
