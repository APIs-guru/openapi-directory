import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlertStatusEnum } from "./alertstatusenum";
import { AlertTypeEnum } from "./alerttypeenum";


// AlertSummary
/** 
 * Provides a summary of an alert's configuration.
**/
export class AlertSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlertArn" })
  alertArn?: string;

  @Metadata({ data: "json, name=AlertName" })
  alertName?: string;

  @Metadata({ data: "json, name=AlertSensitivityThreshold" })
  alertSensitivityThreshold?: number;

  @Metadata({ data: "json, name=AlertStatus" })
  alertStatus?: AlertStatusEnum;

  @Metadata({ data: "json, name=AlertType" })
  alertType?: AlertTypeEnum;

  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
