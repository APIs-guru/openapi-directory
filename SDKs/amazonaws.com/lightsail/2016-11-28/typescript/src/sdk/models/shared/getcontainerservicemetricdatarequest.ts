import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceMetricNameEnum } from "./containerservicemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";



export class GetContainerServiceMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: ContainerServiceMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];
}
