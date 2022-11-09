import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";
import { MetricSetSourceEnum } from "./metricsetsourceenum";


// MetricDatum
/** 
 * Information about the metric for a candidate produced by an AutoML job.
**/
export class MetricDatum extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName?: AutoMlMetricEnumEnum;

  @Metadata({ data: "json, name=Set" })
  set?: MetricSetSourceEnum;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
