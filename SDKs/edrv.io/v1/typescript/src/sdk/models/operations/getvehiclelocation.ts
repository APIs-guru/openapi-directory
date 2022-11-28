import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVehicleLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehicleLocationPathParams;
}


export class GetVehicleLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
