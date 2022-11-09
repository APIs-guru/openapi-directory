import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricSetSummary
/** 
 * Contains information about a dataset.
**/
export class MetricSetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;

  @Metadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @Metadata({ data: "json, name=MetricSetName" })
  metricSetName?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
