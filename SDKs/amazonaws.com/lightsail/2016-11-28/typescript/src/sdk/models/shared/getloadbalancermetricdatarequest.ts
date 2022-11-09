import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";


export class GetLoadBalancerMetricDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "json, name=metricName" })
  metricName: LoadBalancerMetricNameEnum;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @Metadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
