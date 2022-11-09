import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSlotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=intentId" })
  intentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=slotId" })
  slotId: string;
}


export class UpdateSlotHeaders extends SpeakeasyBase {
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


// UpdateSlotRequestBodyMultipleValuesSetting
/** 
 * Indicates whether a slot can return multiple values.
**/
export class UpdateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMultipleValues" })
  allowMultipleValues?: boolean;
}


// UpdateSlotRequestBodyObfuscationSetting
/** 
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
export class UpdateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=obfuscationSettingType" })
  obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}


// UpdateSlotRequestBodyValueElicitationSetting
/** 
 * Settings that you can use for eliciting a slot value.
**/
export class UpdateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
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


export class UpdateSlotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=multipleValuesSetting" })
  multipleValuesSetting?: UpdateSlotRequestBodyMultipleValuesSetting;

  @Metadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: UpdateSlotRequestBodyObfuscationSetting;

  @Metadata({ data: "json, name=slotName" })
  slotName: string;

  @Metadata({ data: "json, name=slotTypeId" })
  slotTypeId: string;

  @Metadata({ data: "json, name=valueElicitationSetting" })
  valueElicitationSetting: UpdateSlotRequestBodyValueElicitationSetting;
}


export class UpdateSlotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSlotPathParams;

  @Metadata()
  headers: UpdateSlotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSlotRequestBody;
}


export class UpdateSlotResponse extends SpeakeasyBase {
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
  updateSlotResponse?: shared.UpdateSlotResponse;

  @Metadata()
  validationException?: any;
}
