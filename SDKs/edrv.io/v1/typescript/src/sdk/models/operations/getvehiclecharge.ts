import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVehicleChargePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleChargeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVehicleChargePathParams;
}


export class GetVehicleChargeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
