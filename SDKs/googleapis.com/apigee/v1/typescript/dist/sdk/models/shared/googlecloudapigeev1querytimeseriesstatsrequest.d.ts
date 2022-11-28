import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1MetricAggregation } from "./googlecloudapigeev1metricaggregation";
import { GoogleTypeInterval } from "./googletypeinterval";
export declare enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum {
    WindowSizeUnspecified = "WINDOW_SIZE_UNSPECIFIED",
    Minute = "MINUTE",
    Hour = "HOUR",
    Day = "DAY",
    Month = "MONTH"
}
/**
 * QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.
**/
export declare class GoogleCloudApigeeV1QueryTimeSeriesStatsRequest extends SpeakeasyBase {
    dimensions?: string[];
    filter?: string;
    metrics?: GoogleCloudApigeeV1MetricAggregation[];
    pageSize?: number;
    pageToken?: string;
    timeRange?: GoogleTypeInterval;
    timestampOrder?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum;
    windowSize?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum;
}
