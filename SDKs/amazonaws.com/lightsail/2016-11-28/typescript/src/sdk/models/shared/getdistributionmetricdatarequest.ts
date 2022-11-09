import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionMetricNameEnum } from "./distributionmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";


export class GetDistributionMetricDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionName" })
  distributionName: string;

  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=metricName" })
  metricName: DistributionMetricNameEnum;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @Metadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
