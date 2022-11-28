import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DataPointsGetStatisticsAllListGroupByEnum {
    Week = "week",
    Month = "month"
}
export declare enum DataPointsGetStatisticsAllListStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum DataPointsGetStatisticsAllListTimeFrameEnum {
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
export declare enum DataPointsGetStatisticsAllListTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsGetStatisticsAllListQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    groupBy?: DataPointsGetStatisticsAllListGroupByEnum;
    status?: DataPointsGetStatisticsAllListStatusEnum;
    tag?: string;
    timeFrame: DataPointsGetStatisticsAllListTimeFrameEnum;
    toDay?: string;
    type: DataPointsGetStatisticsAllListTypeEnum;
}
export declare class DataPointsGetStatisticsAllListRequest extends SpeakeasyBase {
    queryParams: DataPointsGetStatisticsAllListQueryParams;
}
export declare class DataPointsGetStatisticsAllListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
