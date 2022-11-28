import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetricNameEnum } from "./instancemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
export declare class GetInstanceMetricDataRequest extends SpeakeasyBase {
    endTime: Date;
    instanceName: string;
    metricName: InstanceMetricNameEnum;
    period: number;
    startTime: Date;
    statistics: MetricStatisticEnum[];
    unit: MetricUnitEnum;
}
