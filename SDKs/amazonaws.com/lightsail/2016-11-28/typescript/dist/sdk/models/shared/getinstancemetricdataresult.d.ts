import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { InstanceMetricNameEnum } from "./instancemetricnameenum";
export declare class GetInstanceMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: InstanceMetricNameEnum;
}
