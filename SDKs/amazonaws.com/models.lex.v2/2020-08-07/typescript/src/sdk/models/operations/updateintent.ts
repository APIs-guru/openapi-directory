import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIntentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intentId" })
  intentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class UpdateIntentHeaders extends SpeakeasyBase {
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


// UpdateIntentRequestBodyDialogCodeHook
/** 
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export class UpdateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateIntentRequestBodyFulfillmentCodeHook
/** 
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export class UpdateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateIntentRequestBodyIntentClosingSetting
/** 
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export class UpdateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closingResponse" })
  closingResponse?: shared.ResponseSpecification;
}


// UpdateIntentRequestBodyIntentConfirmationSetting
/** 
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export class UpdateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=declinationResponse" })
  declinationResponse?: shared.ResponseSpecification;

  @SpeakeasyMetadata({ data: "json, name=promptSpecification" })
  promptSpecification?: shared.PromptSpecification;
}


// UpdateIntentRequestBodyKendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export class UpdateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kendraIndex" })
  kendraIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}


export class UpdateIntentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: UpdateIntentRequestBodyDialogCodeHook;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentCodeHook" })
  fulfillmentCodeHook?: UpdateIntentRequestBodyFulfillmentCodeHook;

  @SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: shared.InputContext[];

  @SpeakeasyMetadata({ data: "json, name=intentClosingSetting" })
  intentClosingSetting?: UpdateIntentRequestBodyIntentClosingSetting;

  @SpeakeasyMetadata({ data: "json, name=intentConfirmationSetting" })
  intentConfirmationSetting?: UpdateIntentRequestBodyIntentConfirmationSetting;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName: string;

  @SpeakeasyMetadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: UpdateIntentRequestBodyKendraConfiguration;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: shared.OutputContext[];

  @SpeakeasyMetadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: shared.SampleUtterance[];

  @SpeakeasyMetadata({ data: "json, name=slotPriorities", elemType: shared.SlotPriority })
  slotPriorities?: shared.SlotPriority[];
}


export class UpdateIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateIntentPathParams;

  @SpeakeasyMetadata()
  headers: UpdateIntentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateIntentRequestBody;
}


export class UpdateIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

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
  updateIntentResponse?: shared.UpdateIntentResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
