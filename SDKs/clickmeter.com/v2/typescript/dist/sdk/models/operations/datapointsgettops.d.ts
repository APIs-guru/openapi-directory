import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataPointsGetTopsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum DataPointsGetTopsTimeframeEnum {
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
export declare enum DataPointsGetTopsTypeEnum {
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
export declare class DataPointsGetTopsQueryParams extends SpeakeasyBase {
    fromDay?: string;
    timeframe: DataPointsGetTopsTimeframeEnum;
    toDay?: string;
    type: DataPointsGetTopsTypeEnum;
}
export declare class DataPointsGetTopsRequest extends SpeakeasyBase {
    pathParams: DataPointsGetTopsPathParams;
    queryParams: DataPointsGetTopsQueryParams;
}
export declare class DataPointsGetTopsResponse extends SpeakeasyBase {
    apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;
    contentType: string;
    statusCode: number;
}
