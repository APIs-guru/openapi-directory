import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
export declare class GetLoadBalancerMetricDataRequest extends SpeakeasyBase {
    endTime: Date;
    loadBalancerName: string;
    metricName: LoadBalancerMetricNameEnum;
    period: number;
    startTime: Date;
    statistics: MetricStatisticEnum[];
    unit: MetricUnitEnum;
}
