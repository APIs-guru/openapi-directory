import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { ContainerServiceMetricNameEnum } from "./containerservicemetricnameenum";



export class GetContainerServiceMetricDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricData", elemType: MetricDatapoint })
  metricData?: MetricDatapoint[];

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: ContainerServiceMetricNameEnum;
}
