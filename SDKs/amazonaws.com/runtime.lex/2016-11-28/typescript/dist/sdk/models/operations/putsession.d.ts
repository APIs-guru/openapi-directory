import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSessionPathParams extends SpeakeasyBase {
    botAlias: string;
    botName: string;
    userId: string;
}
export declare class PutSessionHeaders extends SpeakeasyBase {
    accept?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
export declare class PutSessionRequestBodyDialogAction extends SpeakeasyBase {
    fulfillmentState?: shared.FulfillmentStateEnum;
    intentName?: string;
    message?: string;
    messageFormat?: shared.MessageFormatTypeEnum;
    slotToElicit?: string;
    slots?: Map<string, string>;
    type?: shared.DialogActionTypeEnum;
}
export declare class PutSessionRequestBody extends SpeakeasyBase {
    activeContexts?: shared.ActiveContext[];
    dialogAction?: PutSessionRequestBodyDialogAction;
    recentIntentSummaryView?: shared.IntentSummary[];
    sessionAttributes?: Map<string, string>;
}
export declare class PutSessionRequest extends SpeakeasyBase {
    pathParams: PutSessionPathParams;
    headers: PutSessionHeaders;
    request: PutSessionRequestBody;
}
export declare class PutSessionResponse extends SpeakeasyBase {
    badGatewayException?: any;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    dependencyFailedException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    notAcceptableException?: any;
    notFoundException?: any;
    putSessionResponse?: shared.PutSessionResponse;
    statusCode: number;
}
