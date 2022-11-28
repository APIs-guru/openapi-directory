import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertStatusEnum } from "./alertstatusenum";
import { AlertTypeEnum } from "./alerttypeenum";



// AlertSummary
/** 
 * Provides a summary of an alert's configuration.
**/
export class AlertSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlertArn" })
  alertArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AlertName" })
  alertName?: string;

  @SpeakeasyMetadata({ data: "json, name=AlertSensitivityThreshold" })
  alertSensitivityThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=AlertStatus" })
  alertStatus?: AlertStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=AlertType" })
  alertType?: AlertTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
