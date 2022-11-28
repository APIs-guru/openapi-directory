import { SpeakeasyBase } from "../../../internal/utils";
export declare const EcommerceDeliveryServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class EcommerceDeliveryHeaders extends SpeakeasyBase {
    contentType: string;
}
export declare class EcommerceDeliveryRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    destinationAirportCode?: string;
    destinationLatitude: number;
    destinationLongitude: number;
    originAirportCode?: string;
    originLatitude: number;
    originLongitude: number;
    volumetricWeight: number;
    waybillType: string;
}
export declare class EcommerceDeliveryRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: EcommerceDeliveryHeaders;
    request?: EcommerceDeliveryRequestBody;
}
export declare class EcommerceDeliveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
