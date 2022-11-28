import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AggregatedGetGroupsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum AggregatedGetGroupsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare enum AggregatedGetGroupsSummaryTimeFrameEnum {
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
export declare class AggregatedGetGroupsSummaryQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortDirection?: AggregatedGetGroupsSummarySortDirectionEnum;
    status?: AggregatedGetGroupsSummaryStatusEnum;
    tag?: string;
    textSearch?: string;
    timeFrame: AggregatedGetGroupsSummaryTimeFrameEnum;
    toDay?: string;
}
export declare class AggregatedGetGroupsSummaryRequest extends SpeakeasyBase {
    queryParams: AggregatedGetGroupsSummaryQueryParams;
}
export declare class AggregatedGetGroupsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
}
