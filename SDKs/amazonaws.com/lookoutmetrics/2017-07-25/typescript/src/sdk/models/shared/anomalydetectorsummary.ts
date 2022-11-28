import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";



// AnomalyDetectorSummary
/** 
 * Contains information about an an anomaly detector.
**/
export class AnomalyDetectorSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorName" })
  anomalyDetectorName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AnomalyDetectorStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
