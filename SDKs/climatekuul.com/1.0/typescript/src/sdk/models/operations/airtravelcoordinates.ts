import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const AirtravelCoordinatesServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class AirtravelCoordinatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class AirtravelCoordinatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=destination_airport_latitude;" })
  destinationAirportLatitude: number;

  @SpeakeasyMetadata({ data: "form, name=destination_airport_longitude;" })
  destinationAirportLongitude: number;

  @SpeakeasyMetadata({ data: "form, name=number_of_passengers;" })
  numberOfPassengers: number;

  @SpeakeasyMetadata({ data: "form, name=origin_airport_latitude;" })
  originAirportLatitude: number;

  @SpeakeasyMetadata({ data: "form, name=origin_airport_longitude;" })
  originAirportLongitude: number;

  @SpeakeasyMetadata({ data: "form, name=travel_class;" })
  travelClass: string;

  @SpeakeasyMetadata({ data: "form, name=travel_mode;" })
  travelMode: string;
}


export class AirtravelCoordinatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: AirtravelCoordinatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: AirtravelCoordinatesRequestBody;
}


export class AirtravelCoordinatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
