import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DataPointsGetStatisticsAggregatedSingleStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum DataPointsGetStatisticsAggregatedSingleTimeFrameEnum {
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
export declare enum DataPointsGetStatisticsAggregatedSingleTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsGetStatisticsAggregatedSingleQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    hourly?: boolean;
    status?: DataPointsGetStatisticsAggregatedSingleStatusEnum;
    tag?: string;
    timeFrame: DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;
    toDay?: string;
    type?: DataPointsGetStatisticsAggregatedSingleTypeEnum;
}
export declare class DataPointsGetStatisticsAggregatedSingleRequest extends SpeakeasyBase {
    queryParams: DataPointsGetStatisticsAggregatedSingleQueryParams;
}
export declare class DataPointsGetStatisticsAggregatedSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
