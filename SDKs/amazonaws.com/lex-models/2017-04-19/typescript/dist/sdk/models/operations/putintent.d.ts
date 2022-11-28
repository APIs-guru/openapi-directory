import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutIntentPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PutIntentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
export declare class PutIntentRequestBodyConclusionStatement extends SpeakeasyBase {
    messages?: shared.Message[];
    responseCard?: string;
}
/**
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export declare class PutIntentRequestBodyConfirmationPrompt extends SpeakeasyBase {
    maxAttempts?: number;
    messages?: shared.Message[];
    responseCard?: string;
}
/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
**/
export declare class PutIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
    messageVersion?: string;
    uri?: string;
}
/**
 * A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
**/
export declare class PutIntentRequestBodyFollowUpPrompt extends SpeakeasyBase {
    prompt?: shared.Prompt;
    rejectionStatement?: shared.Statement;
}
/**
 * <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
**/
export declare class PutIntentRequestBodyFulfillmentActivity extends SpeakeasyBase {
    codeHook?: shared.CodeHook;
    type?: shared.FulfillmentActivityTypeEnum;
}
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
**/
export declare class PutIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
    kendraIndex?: string;
    queryFilterString?: string;
    role?: string;
}
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
export declare class PutIntentRequestBodyRejectionStatement extends SpeakeasyBase {
    messages?: shared.Message[];
    responseCard?: string;
}
export declare class PutIntentRequestBody extends SpeakeasyBase {
    checksum?: string;
    conclusionStatement?: PutIntentRequestBodyConclusionStatement;
    confirmationPrompt?: PutIntentRequestBodyConfirmationPrompt;
    createVersion?: boolean;
    description?: string;
    dialogCodeHook?: PutIntentRequestBodyDialogCodeHook;
    followUpPrompt?: PutIntentRequestBodyFollowUpPrompt;
    fulfillmentActivity?: PutIntentRequestBodyFulfillmentActivity;
    inputContexts?: shared.InputContext[];
    kendraConfiguration?: PutIntentRequestBodyKendraConfiguration;
    outputContexts?: shared.OutputContext[];
    parentIntentSignature?: string;
    rejectionStatement?: PutIntentRequestBodyRejectionStatement;
    sampleUtterances?: string[];
    slots?: shared.Slot[];
}
export declare class PutIntentRequest extends SpeakeasyBase {
    pathParams: PutIntentPathParams;
    headers: PutIntentHeaders;
    request: PutIntentRequestBody;
}
export declare class PutIntentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    preconditionFailedException?: any;
    putIntentResponse?: shared.PutIntentResponse;
    statusCode: number;
}
