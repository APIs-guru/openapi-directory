import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";
import { MetricSetSourceEnum } from "./metricsetsourceenum";



// MetricDatum
/** 
 * Information about the metric for a candidate produced by an AutoML job.
**/
export class MetricDatum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: AutoMlMetricEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=Set" })
  set?: MetricSetSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
