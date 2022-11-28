import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVehicleBatteryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleBatteryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehicleBatteryPathParams;
}


export class GetVehicleBatteryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
