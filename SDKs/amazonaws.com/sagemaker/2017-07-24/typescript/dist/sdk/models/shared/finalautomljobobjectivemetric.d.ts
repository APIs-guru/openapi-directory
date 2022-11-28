import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";
import { AutoMlJobObjectiveTypeEnum } from "./automljobobjectivetypeenum";
/**
 * The best candidate result from an AutoML training job.
**/
export declare class FinalAutoMlJobObjectiveMetric extends SpeakeasyBase {
    metricName: AutoMlMetricEnumEnum;
    type?: AutoMlJobObjectiveTypeEnum;
    value: number;
}
