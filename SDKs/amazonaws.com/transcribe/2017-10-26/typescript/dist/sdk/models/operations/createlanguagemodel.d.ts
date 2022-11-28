import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLanguageModelXAmzTargetEnum {
    TranscribeCreateLanguageModel = "Transcribe.CreateLanguageModel"
}
export declare class CreateLanguageModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLanguageModelXAmzTargetEnum;
}
export declare class CreateLanguageModelRequest extends SpeakeasyBase {
    headers: CreateLanguageModelHeaders;
    request: shared.CreateLanguageModelRequest;
}
export declare class CreateLanguageModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createLanguageModelResponse?: shared.CreateLanguageModelResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
