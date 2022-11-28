import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSlotTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutSlotTypeHeaders extends SpeakeasyBase {
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

export enum PutSlotTypeRequestBodyValueSelectionStrategyEnum {
    OriginalValue = "ORIGINAL_VALUE",
    TopResolution = "TOP_RESOLUTION"
}


export class PutSlotTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enumerationValues", elemType: shared.EnumerationValue })
  enumerationValues?: shared.EnumerationValue[];

  @SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeConfigurations", elemType: shared.SlotTypeConfiguration })
  slotTypeConfigurations?: shared.SlotTypeConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=valueSelectionStrategy" })
  valueSelectionStrategy?: PutSlotTypeRequestBodyValueSelectionStrategyEnum;
}


export class PutSlotTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSlotTypePathParams;

  @SpeakeasyMetadata()
  headers: PutSlotTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutSlotTypeRequestBody;
}


export class PutSlotTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  putSlotTypeResponse?: shared.PutSlotTypeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
