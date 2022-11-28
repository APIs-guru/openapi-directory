import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteChargeStationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteChargeStationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteChargeStationPathParams;
}


export class DeleteChargeStationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
