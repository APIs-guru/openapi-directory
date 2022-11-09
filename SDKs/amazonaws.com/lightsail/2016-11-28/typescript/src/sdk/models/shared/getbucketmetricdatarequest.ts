import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketMetricNameEnum } from "./bucketmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";


export class GetBucketMetricDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=metricName" })
  metricName: BucketMetricNameEnum;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=statistics" })
  statistics: MetricStatisticEnum[];

  @Metadata({ data: "json, name=unit" })
  unit: MetricUnitEnum;
}
