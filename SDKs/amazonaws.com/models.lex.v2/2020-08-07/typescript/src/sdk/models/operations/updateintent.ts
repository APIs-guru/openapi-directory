import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateIntentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=intentId" })
  intentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class UpdateIntentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateIntentRequestBodyDialogCodeHook
/** 
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export class UpdateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateIntentRequestBodyFulfillmentCodeHook
/** 
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export class UpdateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateIntentRequestBodyIntentClosingSetting
/** 
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export class UpdateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=closingResponse" })
  closingResponse?: shared.ResponseSpecification;
}


// UpdateIntentRequestBodyIntentConfirmationSetting
/** 
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export class UpdateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=declinationResponse" })
  declinationResponse?: shared.ResponseSpecification;

  @Metadata({ data: "json, name=promptSpecification" })
  promptSpecification?: shared.PromptSpecification;
}


// UpdateIntentRequestBodyKendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export class UpdateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kendraIndex" })
  kendraIndex?: string;

  @Metadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @Metadata({ data: "json, name=queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}


export class UpdateIntentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: UpdateIntentRequestBodyDialogCodeHook;

  @Metadata({ data: "json, name=fulfillmentCodeHook" })
  fulfillmentCodeHook?: UpdateIntentRequestBodyFulfillmentCodeHook;

  @Metadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: shared.InputContext[];

  @Metadata({ data: "json, name=intentClosingSetting" })
  intentClosingSetting?: UpdateIntentRequestBodyIntentClosingSetting;

  @Metadata({ data: "json, name=intentConfirmationSetting" })
  intentConfirmationSetting?: UpdateIntentRequestBodyIntentConfirmationSetting;

  @Metadata({ data: "json, name=intentName" })
  intentName: string;

  @Metadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: UpdateIntentRequestBodyKendraConfiguration;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: shared.OutputContext[];

  @Metadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @Metadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: shared.SampleUtterance[];

  @Metadata({ data: "json, name=slotPriorities", elemType: shared.SlotPriority })
  slotPriorities?: shared.SlotPriority[];
}


export class UpdateIntentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateIntentPathParams;

  @Metadata()
  headers: UpdateIntentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateIntentRequestBody;
}


export class UpdateIntentResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateIntentResponse?: shared.UpdateIntentResponse;

  @Metadata()
  validationException?: any;
}
