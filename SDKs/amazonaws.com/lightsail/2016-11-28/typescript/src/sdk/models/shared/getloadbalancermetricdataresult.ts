import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricDatapoint } from "./metricdatapoint";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";


export class GetLoadBalancerMetricDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricData", elemType: shared.MetricDatapoint })
  metricData?: MetricDatapoint[];

  @Metadata({ data: "json, name=metricName" })
  metricName?: LoadBalancerMetricNameEnum;
}
