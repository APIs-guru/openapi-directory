import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1MetricAggregation } from "./googlecloudapigeev1metricaggregation";
import { GoogleTypeInterval } from "./googletypeinterval";


export enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}

export enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum {
    WindowSizeUnspecified = "WINDOW_SIZE_UNSPECIFIED",
    Minute = "MINUTE",
    Hour = "HOUR",
    Day = "DAY",
    Month = "MONTH"
}


// GoogleCloudApigeeV1QueryTimeSeriesStatsRequest
/** 
 * QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.
**/
export class GoogleCloudApigeeV1QueryTimeSeriesStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1MetricAggregation })
  metrics?: GoogleCloudApigeeV1MetricAggregation[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;

  @SpeakeasyMetadata({ data: "json, name=timestampOrder" })
  timestampOrder?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=windowSize" })
  windowSize?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum;
}
