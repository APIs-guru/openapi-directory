import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVehicleOdometerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleOdometerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehicleOdometerPathParams;
}


export class GetVehicleOdometerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
