import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConversionsGetStatisticsAllListGroupByEnum {
    Week = "week",
    Month = "month"
}
export declare enum ConversionsGetStatisticsAllListStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare enum ConversionsGetStatisticsAllListTimeFrameEnum {
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
export declare class ConversionsGetStatisticsAllListQueryParams extends SpeakeasyBase {
    fromDay?: string;
    groupBy?: ConversionsGetStatisticsAllListGroupByEnum;
    status?: ConversionsGetStatisticsAllListStatusEnum;
    timeFrame: ConversionsGetStatisticsAllListTimeFrameEnum;
    toDay?: string;
}
export declare class ConversionsGetStatisticsAllListRequest extends SpeakeasyBase {
    queryParams: ConversionsGetStatisticsAllListQueryParams;
}
export declare class ConversionsGetStatisticsAllListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
