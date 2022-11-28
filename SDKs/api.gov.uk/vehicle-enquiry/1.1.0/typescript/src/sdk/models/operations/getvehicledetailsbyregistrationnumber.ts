import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehicleDetailsByRegistrationNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Correlation-Id" })
  xCorrelationId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetVehicleDetailsByRegistrationNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetVehicleDetailsByRegistrationNumberHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.VehicleRequest;
}


export class GetVehicleDetailsByRegistrationNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vehicle?: shared.Vehicle;
}
