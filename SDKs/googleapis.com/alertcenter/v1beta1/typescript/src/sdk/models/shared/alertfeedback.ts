import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AlertFeedbackTypeEnum {
    AlertFeedbackTypeUnspecified = "ALERT_FEEDBACK_TYPE_UNSPECIFIED",
    NotUseful = "NOT_USEFUL",
    SomewhatUseful = "SOMEWHAT_USEFUL",
    VeryUseful = "VERY_USEFUL"
}


// AlertFeedback
/** 
 * A customer feedback about an alert.
**/
export class AlertFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertId" })
  alertId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=feedbackId" })
  feedbackId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AlertFeedbackTypeEnum;
}
