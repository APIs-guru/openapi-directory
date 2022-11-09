import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVehicleOdometerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleOdometerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVehicleOdometerPathParams;
}


export class GetVehicleOdometerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
