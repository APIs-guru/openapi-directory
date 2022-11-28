import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { BucketMetricNameEnum } from "./bucketmetricnameenum";



export class GetBucketMetricDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricData", elemType: MetricDatapoint })
  metricData?: MetricDatapoint[];

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: BucketMetricNameEnum;
}
