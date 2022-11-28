import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AggregatedGetDatapointsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum AggregatedGetDatapointsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum AggregatedGetDatapointsSummaryTimeFrameEnum {
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
export declare enum AggregatedGetDatapointsSummaryTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class AggregatedGetDatapointsSummaryQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    groupId?: number;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortDirection?: AggregatedGetDatapointsSummarySortDirectionEnum;
    status?: AggregatedGetDatapointsSummaryStatusEnum;
    tag?: string;
    textSearch?: string;
    timeFrame: AggregatedGetDatapointsSummaryTimeFrameEnum;
    toDay?: string;
    type: AggregatedGetDatapointsSummaryTypeEnum;
}
export declare class AggregatedGetDatapointsSummaryRequest extends SpeakeasyBase {
    queryParams: AggregatedGetDatapointsSummaryQueryParams;
}
export declare class AggregatedGetDatapointsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
}
