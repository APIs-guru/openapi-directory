import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecognizeUtterancePathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
    localeId: string;
    sessionId: string;
}
export declare class RecognizeUtteranceHeaders extends SpeakeasyBase {
    contentType: string;
    responseContentType?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzLexRequestAttributes?: string;
    xAmzLexSessionState?: string;
}
export declare class RecognizeUtteranceRequestBody extends SpeakeasyBase {
    inputStream?: string;
}
export declare class RecognizeUtteranceRequest extends SpeakeasyBase {
    pathParams: RecognizeUtterancePathParams;
    headers: RecognizeUtteranceHeaders;
    request: RecognizeUtteranceRequestBody;
}
export declare class RecognizeUtteranceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badGatewayException?: any;
    conflictException?: any;
    contentType: string;
    dependencyFailedException?: any;
    internalServerException?: any;
    recognizeUtteranceResponse?: shared.RecognizeUtteranceResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
