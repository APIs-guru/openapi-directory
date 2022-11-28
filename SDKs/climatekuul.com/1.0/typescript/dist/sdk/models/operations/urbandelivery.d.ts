import { SpeakeasyBase } from "../../../internal/utils";
export declare const UrbanDeliveryServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class UrbanDeliveryRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    destinationLatitude: number;
    destinationLongitude: number;
    itemCount: number;
    originLatitude: number;
    originLongitude: number;
    vehicleType: string;
}
export declare class UrbanDeliveryRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UrbanDeliveryRequestBody;
}
export declare class UrbanDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
