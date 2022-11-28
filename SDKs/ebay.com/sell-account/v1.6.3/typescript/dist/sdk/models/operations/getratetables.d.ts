import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRateTablesQueryParams extends SpeakeasyBase {
    countryCode?: string;
}
export declare class GetRateTablesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetRateTablesRequest extends SpeakeasyBase {
    queryParams: GetRateTablesQueryParams;
    security: GetRateTablesSecurity;
}
export declare class GetRateTablesResponse extends SpeakeasyBase {
    contentType: string;
    rateTableResponse?: shared.RateTableResponse;
    statusCode: number;
}
