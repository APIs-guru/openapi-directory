import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";
import { AutoMlJobObjectiveTypeEnum } from "./automljobobjectivetypeenum";


// FinalAutoMlJobObjectiveMetric
/** 
 * The best candidate result from an AutoML training job.
**/
export class FinalAutoMlJobObjectiveMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName: AutoMlMetricEnumEnum;

  @Metadata({ data: "json, name=Type" })
  type?: AutoMlJobObjectiveTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: number;
}
