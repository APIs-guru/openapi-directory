import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceMetricNameEnum } from "./instancemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";


export class GetInstanceMetricDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;

  @Metadata({ data: "json, name=metricName" })
  metricName: InstanceMetricNameEnum;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @Metadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
