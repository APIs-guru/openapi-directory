import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSlotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=intentId" })
  intentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class CreateSlotHeaders extends SpeakeasyBase {
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


// CreateSlotRequestBodyMultipleValuesSetting
/** 
 * Indicates whether a slot can return multiple values.
**/
export class CreateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMultipleValues" })
  allowMultipleValues?: boolean;
}


// CreateSlotRequestBodyObfuscationSetting
/** 
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
export class CreateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=obfuscationSettingType" })
  obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}


// CreateSlotRequestBodyValueElicitationSetting
/** 
 * Settings that you can use for eliciting a slot value.
**/
export class CreateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValueSpecification" })
  defaultValueSpecification?: shared.SlotDefaultValueSpecification;

  @Metadata({ data: "json, name=promptSpecification" })
  promptSpecification?: shared.PromptSpecification;

  @Metadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: shared.SampleUtterance[];

  @Metadata({ data: "json, name=slotConstraint" })
  slotConstraint?: shared.SlotConstraintEnum;

  @Metadata({ data: "json, name=waitAndContinueSpecification" })
  waitAndContinueSpecification?: shared.WaitAndContinueSpecification;
}


export class CreateSlotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=multipleValuesSetting" })
  multipleValuesSetting?: CreateSlotRequestBodyMultipleValuesSetting;

  @Metadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: CreateSlotRequestBodyObfuscationSetting;

  @Metadata({ data: "json, name=slotName" })
  slotName: string;

  @Metadata({ data: "json, name=slotTypeId" })
  slotTypeId: string;

  @Metadata({ data: "json, name=valueElicitationSetting" })
  valueElicitationSetting: CreateSlotRequestBodyValueElicitationSetting;
}


export class CreateSlotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSlotPathParams;

  @Metadata()
  headers: CreateSlotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSlotRequestBody;
}


export class CreateSlotResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSlotResponse?: shared.CreateSlotResponse;

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
