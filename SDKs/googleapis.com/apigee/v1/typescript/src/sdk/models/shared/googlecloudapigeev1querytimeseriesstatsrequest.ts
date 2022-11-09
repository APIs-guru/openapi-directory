import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1MetricAggregation } from "./googlecloudapigeev1metricaggregation";
import { GoogleTypeInterval } from "./googletypeinterval";

export enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}

export enum GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum {
    WindowSizeUnspecified = "WINDOW_SIZE_UNSPECIFIED"
,    Minute = "MINUTE"
,    Hour = "HOUR"
,    Day = "DAY"
,    Month = "MONTH"
}


// GoogleCloudApigeeV1QueryTimeSeriesStatsRequest
/** 
 * QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.
**/
export class GoogleCloudApigeeV1QueryTimeSeriesStatsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudApigeeV1MetricAggregation })
  metrics?: GoogleCloudApigeeV1MetricAggregation[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;

  @Metadata({ data: "json, name=timestampOrder" })
  timestampOrder?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum;

  @Metadata({ data: "json, name=windowSize" })
  windowSize?: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum;
}
