import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceMetricNameEnum } from "./containerservicemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
export declare class GetContainerServiceMetricDataRequest extends SpeakeasyBase {
    endTime: Date;
    metricName: ContainerServiceMetricNameEnum;
    period: number;
    serviceName: string;
    startTime: Date;
    statistics: MetricStatisticEnum[];
}
