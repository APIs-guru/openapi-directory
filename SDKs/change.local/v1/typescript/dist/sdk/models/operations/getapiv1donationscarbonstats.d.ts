import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiV1DonationsCarbonStatsQueryParams extends SpeakeasyBase {
    id?: number;
}
export declare class GetApiV1DonationsCarbonStatsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1DonationsCarbonStatsRequest extends SpeakeasyBase {
    queryParams: GetApiV1DonationsCarbonStatsQueryParams;
    security: GetApiV1DonationsCarbonStatsSecurity;
}
export declare class GetApiV1DonationsCarbonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
