import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVehicleBatteryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleBatteryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVehicleBatteryPathParams;
}


export class GetVehicleBatteryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
