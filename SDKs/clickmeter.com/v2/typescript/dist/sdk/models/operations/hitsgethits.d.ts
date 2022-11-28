import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum HitsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
export declare enum HitsGetHitsTimeframeEnum {
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Custom = "custom"
}
export declare class HitsGetHitsQueryParams extends SpeakeasyBase {
    filter?: HitsGetHitsFilterEnum;
    fromDay?: string;
    limit?: number;
    offset?: string;
    timeframe: HitsGetHitsTimeframeEnum;
    toDay?: string;
}
export declare class HitsGetHitsRequest extends SpeakeasyBase {
    queryParams: HitsGetHitsQueryParams;
}
export declare class HitsGetHitsResponse extends SpeakeasyBase {
    apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;
    contentType: string;
    statusCode: number;
}
