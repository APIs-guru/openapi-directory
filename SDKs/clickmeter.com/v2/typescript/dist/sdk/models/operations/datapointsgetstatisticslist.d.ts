import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataPointsGetStatisticsListPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum DataPointsGetStatisticsListGroupByEnum {
    Week = "week",
    Month = "month"
}
export declare enum DataPointsGetStatisticsListTimeFrameEnum {
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
export declare class DataPointsGetStatisticsListQueryParams extends SpeakeasyBase {
    fromDay?: string;
    groupBy?: DataPointsGetStatisticsListGroupByEnum;
    timeFrame: DataPointsGetStatisticsListTimeFrameEnum;
    toDay?: string;
}
export declare class DataPointsGetStatisticsListRequest extends SpeakeasyBase {
    pathParams: DataPointsGetStatisticsListPathParams;
    queryParams: DataPointsGetStatisticsListQueryParams;
}
export declare class DataPointsGetStatisticsListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
