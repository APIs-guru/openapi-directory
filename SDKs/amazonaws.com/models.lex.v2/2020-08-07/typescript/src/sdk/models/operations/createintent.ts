import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateIntentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class CreateIntentHeaders extends SpeakeasyBase {
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


// CreateIntentRequestBodyDialogCodeHook
/** 
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
export class CreateIntentRequestBodyDialogCodeHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// CreateIntentRequestBodyFulfillmentCodeHook
/** 
 * Determines if a Lambda function should be invoked for a specific intent.
**/
export class CreateIntentRequestBodyFulfillmentCodeHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// CreateIntentRequestBodyIntentClosingSetting
/** 
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
export class CreateIntentRequestBodyIntentClosingSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=closingResponse" })
  closingResponse?: shared.ResponseSpecification;
}


// CreateIntentRequestBodyIntentConfirmationSetting
/** 
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
export class CreateIntentRequestBodyIntentConfirmationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=declinationResponse" })
  declinationResponse?: shared.ResponseSpecification;

  @Metadata({ data: "json, name=promptSpecification" })
  promptSpecification?: shared.PromptSpecification;
}


// CreateIntentRequestBodyKendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export class CreateIntentRequestBodyKendraConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kendraIndex" })
  kendraIndex?: string;

  @Metadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @Metadata({ data: "json, name=queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}


export class CreateIntentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: CreateIntentRequestBodyDialogCodeHook;

  @Metadata({ data: "json, name=fulfillmentCodeHook" })
  fulfillmentCodeHook?: CreateIntentRequestBodyFulfillmentCodeHook;

  @Metadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: shared.InputContext[];

  @Metadata({ data: "json, name=intentClosingSetting" })
  intentClosingSetting?: CreateIntentRequestBodyIntentClosingSetting;

  @Metadata({ data: "json, name=intentConfirmationSetting" })
  intentConfirmationSetting?: CreateIntentRequestBodyIntentConfirmationSetting;

  @Metadata({ data: "json, name=intentName" })
  intentName: string;

  @Metadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: CreateIntentRequestBodyKendraConfiguration;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: shared.OutputContext[];

  @Metadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @Metadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: shared.SampleUtterance[];
}


export class CreateIntentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateIntentPathParams;

  @Metadata()
  headers: CreateIntentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateIntentRequestBody;
}


export class CreateIntentResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createIntentResponse?: shared.CreateIntentResponse;

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
  validationException?: any;
}
