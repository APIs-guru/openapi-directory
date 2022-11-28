import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";



export class GetLoadBalancerMetricDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricData", elemType: MetricDatapoint })
  metricData?: MetricDatapoint[];

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: LoadBalancerMetricNameEnum;
}
