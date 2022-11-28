import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataPointsGetStatisticsSinglePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum DataPointsGetStatisticsSingleTimeFrameEnum {
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
export declare class DataPointsGetStatisticsSingleQueryParams extends SpeakeasyBase {
    fromDay?: string;
    hourly?: boolean;
    timeFrame: DataPointsGetStatisticsSingleTimeFrameEnum;
    toDay?: string;
}
export declare class DataPointsGetStatisticsSingleRequest extends SpeakeasyBase {
    pathParams: DataPointsGetStatisticsSinglePathParams;
    queryParams: DataPointsGetStatisticsSingleQueryParams;
}
export declare class DataPointsGetStatisticsSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
