import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionMetricNameEnum } from "./distributionmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";



export class GetDistributionMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: DistributionMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
