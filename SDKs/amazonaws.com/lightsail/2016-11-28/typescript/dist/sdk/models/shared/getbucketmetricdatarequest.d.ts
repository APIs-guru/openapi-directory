import { SpeakeasyBase } from "../../../internal/utils";
import { BucketMetricNameEnum } from "./bucketmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
export declare class GetBucketMetricDataRequest extends SpeakeasyBase {
    bucketName: string;
    endTime: Date;
    metricName: BucketMetricNameEnum;
    period: number;
    startTime: Date;
    statistics: MetricStatisticEnum[];
    unit: MetricUnitEnum;
}
