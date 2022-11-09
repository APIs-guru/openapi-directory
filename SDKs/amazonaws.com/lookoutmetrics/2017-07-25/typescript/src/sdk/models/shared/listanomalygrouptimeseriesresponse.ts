import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeSeries } from "./timeseries";


export class ListAnomalyGroupTimeSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TimeSeriesList", elemType: shared.TimeSeries })
  timeSeriesList?: TimeSeries[];

  @Metadata({ data: "json, name=TimestampList" })
  timestampList?: string[];
}
