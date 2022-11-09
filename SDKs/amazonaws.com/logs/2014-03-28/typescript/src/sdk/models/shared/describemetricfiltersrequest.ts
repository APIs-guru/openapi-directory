import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeMetricFiltersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterNamePrefix" })
  filterNamePrefix?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=metricNamespace" })
  metricNamespace?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
