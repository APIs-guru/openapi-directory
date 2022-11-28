import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSessionPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
    localeId: string;
    sessionId: string;
}
export declare class PutSessionHeaders extends SpeakeasyBase {
    responseContentType?: string;
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
export declare class PutSessionRequestBodySessionState extends SpeakeasyBase {
    activeContexts?: shared.ActiveContext[];
    dialogAction?: shared.DialogAction;
    intent?: shared.Intent;
    originatingRequestId?: string;
    sessionAttributes?: Map<string, string>;
}
export declare class PutSessionRequestBody extends SpeakeasyBase {
    messages?: shared.Message[];
    requestAttributes?: Map<string, string>;
    sessionState: PutSessionRequestBodySessionState;
}
export declare class PutSessionRequest extends SpeakeasyBase {
    pathParams: PutSessionPathParams;
    headers: PutSessionHeaders;
    request: PutSessionRequestBody;
}
export declare class PutSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badGatewayException?: any;
    conflictException?: any;
    contentType: string;
    dependencyFailedException?: any;
    internalServerException?: any;
    putSessionResponse?: shared.PutSessionResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
