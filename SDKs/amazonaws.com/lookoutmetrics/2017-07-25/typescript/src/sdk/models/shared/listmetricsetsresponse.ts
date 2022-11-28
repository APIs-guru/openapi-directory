import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricSetSummary } from "./metricsetsummary";



export class ListMetricSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricSetSummaryList", elemType: MetricSetSummary })
  metricSetSummaryList?: MetricSetSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
