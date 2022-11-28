import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AggregatedGetConversionsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum AggregatedGetConversionsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare enum AggregatedGetConversionsSummaryTimeFrameEnum {
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
export declare class AggregatedGetConversionsSummaryQueryParams extends SpeakeasyBase {
    fromDay?: string;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortDirection?: AggregatedGetConversionsSummarySortDirectionEnum;
    status?: AggregatedGetConversionsSummaryStatusEnum;
    textSearch?: string;
    timeFrame: AggregatedGetConversionsSummaryTimeFrameEnum;
    toDay?: string;
}
export declare class AggregatedGetConversionsSummaryRequest extends SpeakeasyBase {
    queryParams: AggregatedGetConversionsSummaryQueryParams;
}
export declare class AggregatedGetConversionsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
}
