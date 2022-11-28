import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetTopsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GroupsGetTopsHittypeEnum {
    Clicks = "clicks",
    Views = "views"
}
export declare enum GroupsGetTopsTimeframeEnum {
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
export declare enum GroupsGetTopsTypeEnum {
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
export declare class GroupsGetTopsQueryParams extends SpeakeasyBase {
    fromDay?: string;
    hittype?: GroupsGetTopsHittypeEnum;
    timeframe: GroupsGetTopsTimeframeEnum;
    toDay?: string;
    type: GroupsGetTopsTypeEnum;
}
export declare class GroupsGetTopsRequest extends SpeakeasyBase {
    pathParams: GroupsGetTopsPathParams;
    queryParams: GroupsGetTopsQueryParams;
}
export declare class GroupsGetTopsResponse extends SpeakeasyBase {
    apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;
    contentType: string;
    statusCode: number;
}
