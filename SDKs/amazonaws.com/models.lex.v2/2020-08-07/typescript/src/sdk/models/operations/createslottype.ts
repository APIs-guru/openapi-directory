import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSlotTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class CreateSlotTypeHeaders extends SpeakeasyBase {
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


// CreateSlotTypeRequestBodyValueSelectionSetting
/** 
 * Contains settings used by Amazon Lex to select a slot value.
**/
export class CreateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexFilter" })
  regexFilter?: shared.SlotValueRegexFilter;

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}


export class CreateSlotTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeName" })
  slotTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeValues", elemType: shared.SlotTypeValue })
  slotTypeValues?: shared.SlotTypeValue[];

  @SpeakeasyMetadata({ data: "json, name=valueSelectionSetting" })
  valueSelectionSetting: CreateSlotTypeRequestBodyValueSelectionSetting;
}


export class CreateSlotTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSlotTypePathParams;

  @SpeakeasyMetadata()
  headers: CreateSlotTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSlotTypeRequestBody;
}


export class CreateSlotTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSlotTypeResponse?: shared.CreateSlotTypeResponse;

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
