import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const AIRTRAVELCOORDINATES_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class AirtravelCoordinatesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class AirtravelCoordinatesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=destination_airport_latitude;" })
  destinationAirportLatitude: number;

  @Metadata({ data: "form, name=destination_airport_longitude;" })
  destinationAirportLongitude: number;

  @Metadata({ data: "form, name=number_of_passengers;" })
  numberOfPassengers: number;

  @Metadata({ data: "form, name=origin_airport_latitude;" })
  originAirportLatitude: number;

  @Metadata({ data: "form, name=origin_airport_longitude;" })
  originAirportLongitude: number;

  @Metadata({ data: "form, name=travel_class;" })
  travelClass: string;

  @Metadata({ data: "form, name=travel_mode;" })
  travelMode: string;
}


export class AirtravelCoordinatesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: AirtravelCoordinatesHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: AirtravelCoordinatesRequestBody;
}


export class AirtravelCoordinatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
