import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSlotTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutSlotTypeHeaders extends SpeakeasyBase {
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

export enum PutSlotTypeRequestBodyValueSelectionStrategyEnum {
    OriginalValue = "ORIGINAL_VALUE"
,    TopResolution = "TOP_RESOLUTION"
}


export class PutSlotTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enumerationValues", elemType: shared.EnumerationValue })
  enumerationValues?: shared.EnumerationValue[];

  @Metadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @Metadata({ data: "json, name=slotTypeConfigurations", elemType: shared.SlotTypeConfiguration })
  slotTypeConfigurations?: shared.SlotTypeConfiguration[];

  @Metadata({ data: "json, name=valueSelectionStrategy" })
  valueSelectionStrategy?: PutSlotTypeRequestBodyValueSelectionStrategyEnum;
}


export class PutSlotTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSlotTypePathParams;

  @Metadata()
  headers: PutSlotTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutSlotTypeRequestBody;
}


export class PutSlotTypeResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  putSlotTypeResponse?: shared.PutSlotTypeResponse;

  @Metadata()
  statusCode: number;
}
