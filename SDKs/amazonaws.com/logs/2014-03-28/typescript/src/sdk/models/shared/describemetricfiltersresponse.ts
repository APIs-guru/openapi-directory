import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricFilter } from "./metricfilter";


export class DescribeMetricFiltersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricFilters", elemType: shared.MetricFilter })
  metricFilters?: MetricFilter[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
