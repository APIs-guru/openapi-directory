import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSlotTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slotTypeId" })
  slotTypeId: string;
}


export class UpdateSlotTypeHeaders extends SpeakeasyBase {
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


// UpdateSlotTypeRequestBodyValueSelectionSetting
/** 
 * Contains settings used by Amazon Lex to select a slot value.
**/
export class UpdateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexFilter" })
  regexFilter?: shared.SlotValueRegexFilter;

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}


export class UpdateSlotTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeName" })
  slotTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeValues", elemType: shared.SlotTypeValue })
  slotTypeValues?: shared.SlotTypeValue[];

  @SpeakeasyMetadata({ data: "json, name=valueSelectionSetting" })
  valueSelectionSetting: UpdateSlotTypeRequestBodyValueSelectionSetting;
}


export class UpdateSlotTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSlotTypePathParams;

  @SpeakeasyMetadata()
  headers: UpdateSlotTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSlotTypeRequestBody;
}


export class UpdateSlotTypeResponse extends SpeakeasyBase {
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
  updateSlotTypeResponse?: shared.UpdateSlotTypeResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
