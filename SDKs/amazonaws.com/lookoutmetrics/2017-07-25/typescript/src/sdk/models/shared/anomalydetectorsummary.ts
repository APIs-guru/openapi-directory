import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";


// AnomalyDetectorSummary
/** 
 * Contains information about an an anomaly detector.
**/
export class AnomalyDetectorSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @Metadata({ data: "json, name=AnomalyDetectorDescription" })
  anomalyDetectorDescription?: string;

  @Metadata({ data: "json, name=AnomalyDetectorName" })
  anomalyDetectorName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: AnomalyDetectorStatusEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
