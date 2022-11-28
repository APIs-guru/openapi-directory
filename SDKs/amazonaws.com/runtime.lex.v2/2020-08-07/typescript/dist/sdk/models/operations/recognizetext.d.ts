import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecognizeTextPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
    localeId: string;
    sessionId: string;
}
export declare class RecognizeTextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The state of the user's session with Amazon Lex V2.
**/
export declare class RecognizeTextRequestBodySessionState extends SpeakeasyBase {
    activeContexts?: shared.ActiveContext[];
    dialogAction?: shared.DialogAction;
    intent?: shared.Intent;
    originatingRequestId?: string;
    sessionAttributes?: Map<string, string>;
}
export declare class RecognizeTextRequestBody extends SpeakeasyBase {
    requestAttributes?: Map<string, string>;
    sessionState?: RecognizeTextRequestBodySessionState;
    text: string;
}
export declare class RecognizeTextRequest extends SpeakeasyBase {
    pathParams: RecognizeTextPathParams;
    headers: RecognizeTextHeaders;
    request: RecognizeTextRequestBody;
}
export declare class RecognizeTextResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badGatewayException?: any;
    conflictException?: any;
    contentType: string;
    dependencyFailedException?: any;
    internalServerException?: any;
    recognizeTextResponse?: shared.RecognizeTextResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
