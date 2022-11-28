import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { InstanceMetricNameEnum } from "./instancemetricnameenum";



export class GetInstanceMetricDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricData", elemType: MetricDatapoint })
  metricData?: MetricDatapoint[];

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: InstanceMetricNameEnum;
}
