import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TranslateTextXAmzTargetEnum {
    AwsShineFrontendService20170701TranslateText = "AWSShineFrontendService_20170701.TranslateText"
}
export declare class TranslateTextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TranslateTextXAmzTargetEnum;
}
export declare class TranslateTextRequest extends SpeakeasyBase {
    headers: TranslateTextHeaders;
    request: shared.TranslateTextRequest;
}
export declare class TranslateTextResponse extends SpeakeasyBase {
    contentType: string;
    detectedLanguageLowConfidenceException?: any;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    tooManyRequestsException?: any;
    translateTextResponse?: shared.TranslateTextResponse;
    unsupportedLanguagePairException?: any;
}
