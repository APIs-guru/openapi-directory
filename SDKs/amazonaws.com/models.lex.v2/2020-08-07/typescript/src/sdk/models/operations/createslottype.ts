import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSlotTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class CreateSlotTypeHeaders extends SpeakeasyBase {
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


// CreateSlotTypeRequestBodyValueSelectionSetting
/** 
 * Contains settings used by Amazon Lex to select a slot value.
**/
export class CreateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=regexFilter" })
  regexFilter?: shared.SlotValueRegexFilter;

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}


export class CreateSlotTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @Metadata({ data: "json, name=slotTypeName" })
  slotTypeName: string;

  @Metadata({ data: "json, name=slotTypeValues", elemType: shared.SlotTypeValue })
  slotTypeValues?: shared.SlotTypeValue[];

  @Metadata({ data: "json, name=valueSelectionSetting" })
  valueSelectionSetting: CreateSlotTypeRequestBodyValueSelectionSetting;
}


export class CreateSlotTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSlotTypePathParams;

  @Metadata()
  headers: CreateSlotTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSlotTypeRequestBody;
}


export class CreateSlotTypeResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSlotTypeResponse?: shared.CreateSlotTypeResponse;

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
