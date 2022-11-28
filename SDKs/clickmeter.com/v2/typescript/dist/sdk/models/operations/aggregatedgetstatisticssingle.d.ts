import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AggregatedGetStatisticsSingleTimeFrameEnum {
    Today = "today",
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Last12months = "last12months",
    Lastyear = "lastyear",
    Currentyear = "currentyear",
    Beginning = "beginning",
    Custom = "custom"
}
export declare class AggregatedGetStatisticsSingleQueryParams extends SpeakeasyBase {
    fromDay?: string;
    hourly?: boolean;
    onlyFavorites?: string;
    timeFrame: AggregatedGetStatisticsSingleTimeFrameEnum;
    toDay?: string;
}
export declare class AggregatedGetStatisticsSingleRequest extends SpeakeasyBase {
    queryParams: AggregatedGetStatisticsSingleQueryParams;
}
export declare class AggregatedGetStatisticsSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
