import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSlotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intentId" })
  intentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slotId" })
  slotId: string;
}


export class UpdateSlotHeaders extends SpeakeasyBase {
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


// UpdateSlotRequestBodyMultipleValuesSetting
/** 
 * Indicates whether a slot can return multiple values.
**/
export class UpdateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMultipleValues" })
  allowMultipleValues?: boolean;
}


// UpdateSlotRequestBodyObfuscationSetting
/** 
 * Determines whether Amazon Lex obscures slot values in conversation logs. 
**/
export class UpdateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=obfuscationSettingType" })
  obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}


// UpdateSlotRequestBodyValueElicitationSetting
/** 
 * Settings that you can use for eliciting a slot value.
**/
export class UpdateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValueSpecification" })
  defaultValueSpecification?: shared.SlotDefaultValueSpecification;

  @SpeakeasyMetadata({ data: "json, name=promptSpecification" })
  promptSpecification?: shared.PromptSpecification;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: shared.SampleUtterance[];

  @SpeakeasyMetadata({ data: "json, name=slotConstraint" })
  slotConstraint?: shared.SlotConstraintEnum;

  @SpeakeasyMetadata({ data: "json, name=waitAndContinueSpecification" })
  waitAndContinueSpecification?: shared.WaitAndContinueSpecification;
}


export class UpdateSlotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=multipleValuesSetting" })
  multipleValuesSetting?: UpdateSlotRequestBodyMultipleValuesSetting;

  @SpeakeasyMetadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: UpdateSlotRequestBodyObfuscationSetting;

  @SpeakeasyMetadata({ data: "json, name=slotName" })
  slotName: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeId" })
  slotTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=valueElicitationSetting" })
  valueElicitationSetting: UpdateSlotRequestBodyValueElicitationSetting;
}


export class UpdateSlotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSlotPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSlotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSlotRequestBody;
}


export class UpdateSlotResponse extends SpeakeasyBase {
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
  updateSlotResponse?: shared.UpdateSlotResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
