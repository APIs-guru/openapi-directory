import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsGetTopsPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare enum ConversionsGetTopsHittypeEnum {
    Clicks = "clicks",
    Views = "views"
}
export declare enum ConversionsGetTopsTimeframeEnum {
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
export declare enum ConversionsGetTopsTypeEnum {
    Datapoints = "datapoints",
    Groups = "groups",
    Browsers = "browsers",
    Browsersfamilies = "browsersfamilies",
    Platforms = "platforms",
    Cities = "cities",
    Countries = "countries",
    Keywords = "keywords",
    Referrers = "referrers",
    Convparameters = "convparameters",
    Destinations = "destinations",
    Languages = "languages",
    Params = "params"
}
export declare class ConversionsGetTopsQueryParams extends SpeakeasyBase {
    fromDay?: string;
    hittype?: ConversionsGetTopsHittypeEnum;
    timeframe: ConversionsGetTopsTimeframeEnum;
    toDay?: string;
    type: ConversionsGetTopsTypeEnum;
}
export declare class ConversionsGetTopsRequest extends SpeakeasyBase {
    pathParams: ConversionsGetTopsPathParams;
    queryParams: ConversionsGetTopsQueryParams;
}
export declare class ConversionsGetTopsResponse extends SpeakeasyBase {
    apiCoreDtoTopsTop?: shared.ApiCoreDtoTopsTop;
    contentType: string;
    statusCode: number;
}
