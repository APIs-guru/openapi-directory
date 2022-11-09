import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVehicleSeenVehicleSeenGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class GetVehicleSeenVehicleSeenGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVehicleSeenVehicleSeenGetQueryParams;
}


export class GetVehicleSeenVehicleSeenGetResponse extends SpeakeasyBase {
  @Metadata()
  booleanResp?: shared.BooleanResp;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
