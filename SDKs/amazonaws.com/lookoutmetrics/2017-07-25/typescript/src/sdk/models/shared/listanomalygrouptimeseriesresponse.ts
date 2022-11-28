import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeries } from "./timeseries";



export class ListAnomalyGroupTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeSeriesList", elemType: TimeSeries })
  timeSeriesList?: TimeSeries[];

  @SpeakeasyMetadata({ data: "json, name=TimestampList" })
  timestampList?: string[];
}
