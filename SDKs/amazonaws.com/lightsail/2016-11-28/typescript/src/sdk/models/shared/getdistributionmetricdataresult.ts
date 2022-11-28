import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { DistributionMetricNameEnum } from "./distributionmetricnameenum";



export class GetDistributionMetricDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricData", elemType: MetricDatapoint })
  metricData?: MetricDatapoint[];

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: DistributionMetricNameEnum;
}
