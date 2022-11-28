import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { DistributionMetricNameEnum } from "./distributionmetricnameenum";
export declare class GetDistributionMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: DistributionMetricNameEnum;
}
