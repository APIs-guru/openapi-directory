import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDailyStatsCarTypeEnum {
    New = "new",
    Used = "used"
}
export declare enum GetDailyStatsCountryEnum {
    Us = "us",
    Ca = "ca"
}
export declare class GetDailyStatsQueryParams extends SpeakeasyBase {
    apiKey?: string;
    carType?: GetDailyStatsCarTypeEnum;
    cityState?: string;
    country?: GetDailyStatsCountryEnum;
    state?: string;
    taxonomyVin?: string;
    vin?: string;
    ymm?: string;
    ymmt?: string;
}
export declare class GetDailyStatsRequest extends SpeakeasyBase {
    queryParams: GetDailyStatsQueryParams;
}
export declare class GetDailyStatsResponse extends SpeakeasyBase {
    contentType: string;
    dailyStats?: shared.DailyStats;
    error?: shared.Error;
    statusCode: number;
}
