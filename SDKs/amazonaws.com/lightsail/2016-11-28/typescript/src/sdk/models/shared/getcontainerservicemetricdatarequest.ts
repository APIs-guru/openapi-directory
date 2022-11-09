import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServiceMetricNameEnum } from "./containerservicemetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";


export class GetContainerServiceMetricDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=metricName" })
  metricName: ContainerServiceMetricNameEnum;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];
}
