import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApiV1DonationsCryptoCalculateCurrencyEnum {
    Eth = "eth",
    Btc = "btc"
}
export declare class GetApiV1DonationsCryptoCalculateQueryParams extends SpeakeasyBase {
    count?: number;
    currency: GetApiV1DonationsCryptoCalculateCurrencyEnum;
}
export declare class GetApiV1DonationsCryptoCalculateSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetApiV1DonationsCryptoCalculateRequest extends SpeakeasyBase {
    queryParams: GetApiV1DonationsCryptoCalculateQueryParams;
    security: GetApiV1DonationsCryptoCalculateSecurity;
}
export declare class GetApiV1DonationsCryptoCalculateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
