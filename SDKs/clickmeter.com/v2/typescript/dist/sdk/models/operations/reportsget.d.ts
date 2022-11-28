import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportsGetTimeframeEnum {
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Beginning = "beginning",
    Custom = "custom"
}
export declare enum ReportsGetTypeEnum {
    Browsers = "browsers",
    Browsersfamilies = "browsersfamilies",
    Platforms = "platforms",
    Cities = "cities",
    Countries = "countries",
    Isps = "isps",
    Ips = "ips",
    Oss = "oss",
    Ossfamilies = "ossfamilies",
    Keywords = "keywords",
    Referrers = "referrers",
    Destinations = "destinations",
    Languages = "languages",
    Params = "params"
}
export declare class ReportsGetQueryParams extends SpeakeasyBase {
    conversion?: number;
    datapoint?: number;
    fromDay?: string;
    group?: number;
    hittype?: string;
    timeframe: ReportsGetTimeframeEnum;
    toDay?: string;
    type: ReportsGetTypeEnum;
}
export declare class ReportsGetRequest extends SpeakeasyBase {
    queryParams: ReportsGetQueryParams;
}
export declare class ReportsGetResponse extends SpeakeasyBase {
    apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;
    contentType: string;
    statusCode: number;
}
