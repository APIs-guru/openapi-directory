import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerMetricNameEnum } from "./loadbalancermetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";



export class GetLoadBalancerMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: LoadBalancerMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
