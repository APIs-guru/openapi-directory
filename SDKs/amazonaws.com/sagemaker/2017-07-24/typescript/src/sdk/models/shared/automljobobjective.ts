import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";



// AutoMlJobObjective
/** 
 * Specifies a metric to minimize or maximize as the objective of a job.
**/
export class AutoMlJobObjective extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: AutoMlMetricEnumEnum;
}
