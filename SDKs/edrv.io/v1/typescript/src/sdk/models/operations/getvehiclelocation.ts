import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVehicleLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVehicleLocationPathParams;
}


export class GetVehicleLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
