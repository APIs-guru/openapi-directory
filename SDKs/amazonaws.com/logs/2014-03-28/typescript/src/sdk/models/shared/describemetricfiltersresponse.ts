import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricFilter } from "./metricfilter";



export class DescribeMetricFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricFilters", elemType: MetricFilter })
  metricFilters?: MetricFilter[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
