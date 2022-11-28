import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsGetStatisticsListPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare enum ConversionsGetStatisticsListGroupByEnum {
    Week = "week",
    Month = "month"
}
export declare enum ConversionsGetStatisticsListTimeFrameEnum {
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
export declare class ConversionsGetStatisticsListQueryParams extends SpeakeasyBase {
    fromDay?: string;
    groupBy?: ConversionsGetStatisticsListGroupByEnum;
    timeFrame: ConversionsGetStatisticsListTimeFrameEnum;
    toDay?: string;
}
export declare class ConversionsGetStatisticsListRequest extends SpeakeasyBase {
    pathParams: ConversionsGetStatisticsListPathParams;
    queryParams: ConversionsGetStatisticsListQueryParams;
}
export declare class ConversionsGetStatisticsListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
