import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metric } from "./metric";
import { FrequencyEnum } from "./frequencyenum";
import { MetricSource } from "./metricsource";
import { TimestampColumn } from "./timestampcolumn";


export class DescribeMetricSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DimensionList" })
  dimensionList?: string[];

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=MetricList", elemType: shared.Metric })
  metricList?: Metric[];

  @Metadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;

  @Metadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @Metadata({ data: "json, name=MetricSetFrequency" })
  metricSetFrequency?: FrequencyEnum;

  @Metadata({ data: "json, name=MetricSetName" })
  metricSetName?: string;

  @Metadata({ data: "json, name=MetricSource" })
  metricSource?: MetricSource;

  @Metadata({ data: "json, name=Offset" })
  offset?: number;

  @Metadata({ data: "json, name=TimestampColumn" })
  timestampColumn?: TimestampColumn;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
