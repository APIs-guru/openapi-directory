import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehicleSeenVehicleSeenGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class GetVehicleSeenVehicleSeenGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVehicleSeenVehicleSeenGetQueryParams;
}


export class GetVehicleSeenVehicleSeenGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  booleanResp?: shared.BooleanResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
