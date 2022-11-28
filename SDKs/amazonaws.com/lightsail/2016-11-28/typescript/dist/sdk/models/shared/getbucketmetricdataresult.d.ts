import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { BucketMetricNameEnum } from "./bucketmetricnameenum";
export declare class GetBucketMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: BucketMetricNameEnum;
}
