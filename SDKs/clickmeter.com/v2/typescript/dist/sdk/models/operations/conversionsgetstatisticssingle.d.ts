import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsGetStatisticsSinglePathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare enum ConversionsGetStatisticsSingleTimeFrameEnum {
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
export declare class ConversionsGetStatisticsSingleQueryParams extends SpeakeasyBase {
    favourite?: boolean;
    fromDay?: string;
    hourly?: boolean;
    tag?: string;
    timeFrame: ConversionsGetStatisticsSingleTimeFrameEnum;
    toDay?: string;
}
export declare class ConversionsGetStatisticsSingleRequest extends SpeakeasyBase {
    pathParams: ConversionsGetStatisticsSinglePathParams;
    queryParams: ConversionsGetStatisticsSingleQueryParams;
}
export declare class ConversionsGetStatisticsSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
}
