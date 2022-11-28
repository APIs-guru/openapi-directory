import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketMetricNameEnum } from "./bucketmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";



export class GetBucketMetricDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: BucketMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
