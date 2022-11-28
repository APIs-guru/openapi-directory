import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetStatisticsListPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GroupsGetStatisticsListGroupByEnum {
    Week = "week",
    Month = "month"
}
export declare enum GroupsGetStatisticsListTimeFrameEnum {
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
export declare class GroupsGetStatisticsListQueryParams extends SpeakeasyBase {
    fromDay?: string;
    groupBy?: GroupsGetStatisticsListGroupByEnum;
    timeFrame: GroupsGetStatisticsListTimeFrameEnum;
    toDay?: string;
}
export declare class GroupsGetStatisticsListRequest extends SpeakeasyBase {
    pathParams: GroupsGetStatisticsListPathParams;
    queryParams: GroupsGetStatisticsListQueryParams;
}
export declare class GroupsGetStatisticsListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
