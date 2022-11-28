import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVehicleChargePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehicleChargePathParams;
}


export class GetVehicleChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
