import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVehicleDetailsByRegistrationNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Correlation-Id" })
  xCorrelationId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetVehicleDetailsByRegistrationNumberRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetVehicleDetailsByRegistrationNumberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VehicleRequest;
}


export class GetVehicleDetailsByRegistrationNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  vehicle?: shared.Vehicle;
}
