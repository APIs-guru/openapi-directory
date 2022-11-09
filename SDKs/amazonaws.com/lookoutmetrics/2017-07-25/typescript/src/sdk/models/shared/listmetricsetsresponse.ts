import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricSetSummary } from "./metricsetsummary";


export class ListMetricSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricSetSummaryList", elemType: shared.MetricSetSummary })
  metricSetSummaryList?: MetricSetSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
