import { SpeakeasyBase } from "../../../internal/utils";
export declare const AirtravelCoordinatesServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class AirtravelCoordinatesHeaders extends SpeakeasyBase {
    contentType: string;
}
export declare class AirtravelCoordinatesRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    destinationAirportLatitude: number;
    destinationAirportLongitude: number;
    numberOfPassengers: number;
    originAirportLatitude: number;
    originAirportLongitude: number;
    travelClass: string;
    travelMode: string;
}
export declare class AirtravelCoordinatesRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: AirtravelCoordinatesHeaders;
    request?: AirtravelCoordinatesRequestBody;
}
export declare class AirtravelCoordinatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
