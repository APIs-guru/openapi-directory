import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricSetSummary
/** 
 * Contains information about a dataset.
**/
export class MetricSetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetDescription" })
  metricSetDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricSetName" })
  metricSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
