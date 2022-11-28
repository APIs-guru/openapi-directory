import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetricNameEnum } from "./instancemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";



export class GetInstanceMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: InstanceMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
