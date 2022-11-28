import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";
export declare class GetLoadBalancerMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: LoadBalancerMetricNameEnum;
}
