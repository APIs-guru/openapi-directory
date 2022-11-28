import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutIntentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutIntentRequestBodyConclusionStatement
/** 
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
**/
export class PutIntentRequestBodyConclusionStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}


// PutIntentRequestBodyConfirmationPrompt
/** 
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export class PutIntentRequestBodyConfirmationPrompt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}


// PutIntentRequestBodyDialogCodeHook
/** 
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
**/
export class PutIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageVersion" })
  messageVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// PutIntentRequestBodyFollowUpPrompt
/** 
 * A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
**/
export class PutIntentRequestBodyFollowUpPrompt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt?: shared.Prompt;

  @SpeakeasyMetadata({ data: "json, name=rejectionStatement" })
  rejectionStatement?: shared.Statement;
}


// PutIntentRequestBodyFulfillmentActivity
/** 
 * <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
**/
export class PutIntentRequestBodyFulfillmentActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeHook" })
  codeHook?: shared.CodeHook;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.FulfillmentActivityTypeEnum;
}


// PutIntentRequestBodyKendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
**/
export class PutIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kendraIndex" })
  kendraIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}


// PutIntentRequestBodyRejectionStatement
/** 
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
**/
export class PutIntentRequestBodyRejectionStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}


export class PutIntentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=conclusionStatement" })
  conclusionStatement?: PutIntentRequestBodyConclusionStatement;

  @SpeakeasyMetadata({ data: "json, name=confirmationPrompt" })
  confirmationPrompt?: PutIntentRequestBodyConfirmationPrompt;

  @SpeakeasyMetadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: PutIntentRequestBodyDialogCodeHook;

  @SpeakeasyMetadata({ data: "json, name=followUpPrompt" })
  followUpPrompt?: PutIntentRequestBodyFollowUpPrompt;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentActivity" })
  fulfillmentActivity?: PutIntentRequestBodyFulfillmentActivity;

  @SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: shared.InputContext[];

  @SpeakeasyMetadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: PutIntentRequestBodyKendraConfiguration;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: shared.OutputContext[];

  @SpeakeasyMetadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=rejectionStatement" })
  rejectionStatement?: PutIntentRequestBodyRejectionStatement;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances" })
  sampleUtterances?: string[];

  @SpeakeasyMetadata({ data: "json, name=slots", elemType: shared.Slot })
  slots?: shared.Slot[];
}


export class PutIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIntentPathParams;

  @SpeakeasyMetadata()
  headers: PutIntentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutIntentRequestBody;
}


export class PutIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  putIntentResponse?: shared.PutIntentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
