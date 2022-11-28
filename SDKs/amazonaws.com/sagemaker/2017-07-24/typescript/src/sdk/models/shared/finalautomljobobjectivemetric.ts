import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";
import { AutoMlJobObjectiveTypeEnum } from "./automljobobjectivetypeenum";



// FinalAutoMlJobObjectiveMetric
/** 
 * The best candidate result from an AutoML training job.
**/
export class FinalAutoMlJobObjectiveMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: AutoMlMetricEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: AutoMlJobObjectiveTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;
}
