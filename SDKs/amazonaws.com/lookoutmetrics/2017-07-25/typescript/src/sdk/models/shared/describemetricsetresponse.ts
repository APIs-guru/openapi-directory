import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
import { FrequencyEnum } from "./frequencyenum";
import { MetricSource } from "./metricsource";
import { TimestampColumn } from "./timestampcolumn";



export class DescribeMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DimensionList" })
  dimensionList?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetricList", elemType: Metric })
  metricList?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetFrequency" })
  metricSetFrequency?: FrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=MetricSetName" })
  metricSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSource" })
  metricSource?: MetricSource;

  @SpeakeasyMetadata({ data: "json, name=Offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=TimestampColumn" })
  timestampColumn?: TimestampColumn;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
