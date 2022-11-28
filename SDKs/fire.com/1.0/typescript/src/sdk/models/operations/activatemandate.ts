import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivateMandatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class ActivateMandateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivateMandatePathParams;
}


export class ActivateMandateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
