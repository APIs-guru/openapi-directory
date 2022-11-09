import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Action } from "./action";
import { AlertStatusEnum } from "./alertstatusenum";
import { AlertTypeEnum } from "./alerttypeenum";


// Alert
/** 
 * A configuration for Amazon SNS-integrated notifications.
**/
export class Alert extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: Action;

  @Metadata({ data: "json, name=AlertArn" })
  alertArn?: string;

  @Metadata({ data: "json, name=AlertDescription" })
  alertDescription?: string;

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
}
