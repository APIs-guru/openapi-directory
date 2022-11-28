import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataPointsGetHitsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum DataPointsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
export declare enum DataPointsGetHitsTimeframeEnum {
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
export declare class DataPointsGetHitsQueryParams extends SpeakeasyBase {
    filter?: DataPointsGetHitsFilterEnum;
    fromDay?: string;
    limit?: number;
    offset?: string;
    timeframe: DataPointsGetHitsTimeframeEnum;
    toDay?: string;
}
export declare class DataPointsGetHitsRequest extends SpeakeasyBase {
    pathParams: DataPointsGetHitsPathParams;
    queryParams: DataPointsGetHitsQueryParams;
}
export declare class DataPointsGetHitsResponse extends SpeakeasyBase {
    apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;
    contentType: string;
    statusCode: number;
}
