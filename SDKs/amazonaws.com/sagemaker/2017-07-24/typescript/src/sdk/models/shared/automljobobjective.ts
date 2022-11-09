import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";


// AutoMlJobObjective
/** 
 * Specifies a metric to minimize or maximize as the objective of a job.
**/
export class AutoMlJobObjective extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName: AutoMlMetricEnumEnum;
}
