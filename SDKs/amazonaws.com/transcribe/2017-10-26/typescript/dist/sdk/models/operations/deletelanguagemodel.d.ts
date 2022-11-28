import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLanguageModelXAmzTargetEnum {
    TranscribeDeleteLanguageModel = "Transcribe.DeleteLanguageModel"
}
export declare class DeleteLanguageModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLanguageModelXAmzTargetEnum;
}
export declare class DeleteLanguageModelRequest extends SpeakeasyBase {
    headers: DeleteLanguageModelHeaders;
    request: shared.DeleteLanguageModelRequest;
}
export declare class DeleteLanguageModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
