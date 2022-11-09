import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetApiV1DonationsCarbonCalculateTransportationMethodEnum {
    Air = "air",
    Truck = "truck",
    Rail = "rail",
    Sea = "sea"
}
export declare class GetApiV1DonationsCarbonCalculateQueryParams extends SpeakeasyBase {
    destinationAddress?: number;
    distanceMi?: number;
    originAddress?: number;
    transportationMethod?: GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
    weightLb: number;
}
export declare class GetApiV1DonationsCarbonCalculateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1DonationsCarbonCalculateRequest extends SpeakeasyBase {
    queryParams: GetApiV1DonationsCarbonCalculateQueryParams;
    security: GetApiV1DonationsCarbonCalculateSecurity;
}
export declare class GetApiV1DonationsCarbonCalculateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
