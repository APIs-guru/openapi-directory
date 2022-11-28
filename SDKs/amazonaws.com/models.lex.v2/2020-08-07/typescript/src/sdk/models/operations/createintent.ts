import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateIntentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class CreateIntentHeaders extends SpeakeasyBase {
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


// CreateIntentRequestBodyDialogCodeHook
/** 
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export class CreateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// CreateIntentRequestBodyFulfillmentCodeHook
/** 
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export class CreateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// CreateIntentRequestBodyIntentClosingSetting
/** 
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export class CreateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closingResponse" })
  closingResponse?: shared.ResponseSpecification;
}


// CreateIntentRequestBodyIntentConfirmationSetting
/** 
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export class CreateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=declinationResponse" })
  declinationResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata({ data: "json, name=promptSpecification" })
  promptSpecification?: shared.PromptSpecification;
}


// CreateIntentRequestBodyKendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export class CreateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kendraIndex" })
  kendraIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}


export class CreateIntentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: CreateIntentRequestBodyDialogCodeHook;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentCodeHook" })
  fulfillmentCodeHook?: CreateIntentRequestBodyFulfillmentCodeHook;

  @SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: shared.InputContext[];

  @SpeakeasyMetadata({ data: "json, name=intentClosingSetting" })
  intentClosingSetting?: CreateIntentRequestBodyIntentClosingSetting;

  @SpeakeasyMetadata({ data: "json, name=intentConfirmationSetting" })
  intentConfirmationSetting?: CreateIntentRequestBodyIntentConfirmationSetting;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName: string;

  @SpeakeasyMetadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: CreateIntentRequestBodyKendraConfiguration;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: shared.OutputContext[];

  @SpeakeasyMetadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: shared.SampleUtterance[];
}


export class CreateIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateIntentPathParams;

  @SpeakeasyMetadata()
  headers: CreateIntentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateIntentRequestBody;
}


export class CreateIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createIntentResponse?: shared.CreateIntentResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
