import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { ContainerServiceMetricNameEnum } from "./containerservicemetricnameenum";
export declare class GetContainerServiceMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: ContainerServiceMetricNameEnum;
}
