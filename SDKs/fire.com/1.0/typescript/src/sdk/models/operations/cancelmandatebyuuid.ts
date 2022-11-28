import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelMandateByUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class CancelMandateByUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelMandateByUuidPathParams;
}


export class CancelMandateByUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
