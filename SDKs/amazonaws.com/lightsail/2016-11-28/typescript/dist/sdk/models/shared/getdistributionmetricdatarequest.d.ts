import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionMetricNameEnum } from "./distributionmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
export declare class GetDistributionMetricDataRequest extends SpeakeasyBase {
    distributionName: string;
    endTime: Date;
    metricName: DistributionMetricNameEnum;
    period: number;
    startTime: Date;
    statistics: MetricStatisticEnum[];
    unit: MetricUnitEnum;
}
