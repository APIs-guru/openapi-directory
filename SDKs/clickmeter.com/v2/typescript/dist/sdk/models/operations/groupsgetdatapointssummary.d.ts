import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetDatapointsSummaryPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GroupsGetDatapointsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GroupsGetDatapointsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare enum GroupsGetDatapointsSummaryTimeFrameEnum {
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
export declare enum GroupsGetDatapointsSummaryTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class GroupsGetDatapointsSummaryQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortDirection?: GroupsGetDatapointsSummarySortDirectionEnum;
    status?: GroupsGetDatapointsSummaryStatusEnum;
    tag?: string;
    textSearch?: string;
    timeFrame: GroupsGetDatapointsSummaryTimeFrameEnum;
    toDay?: string;
    type?: GroupsGetDatapointsSummaryTypeEnum;
}
export declare class GroupsGetDatapointsSummaryRequest extends SpeakeasyBase {
    pathParams: GroupsGetDatapointsSummaryPathParams;
    queryParams: GroupsGetDatapointsSummaryQueryParams;
}
export declare class GroupsGetDatapointsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
}
