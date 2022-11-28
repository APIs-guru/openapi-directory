import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GroupsGetStatisticsAllListGroupByEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare enum GroupsGetStatisticsAllListTimeFrameEnum {
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
export declare class GroupsGetStatisticsAllListQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    groupBy?: GroupsGetStatisticsAllListGroupByEnum;
    status?: string;
    tag?: string;
    timeFrame: GroupsGetStatisticsAllListTimeFrameEnum;
    toDay?: string;
}
export declare class GroupsGetStatisticsAllListRequest extends SpeakeasyBase {
    queryParams: GroupsGetStatisticsAllListQueryParams;
}
export declare class GroupsGetStatisticsAllListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
