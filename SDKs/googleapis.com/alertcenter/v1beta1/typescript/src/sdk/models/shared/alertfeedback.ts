import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AlertFeedbackTypeEnum {
    AlertFeedbackTypeUnspecified = "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
,    NotUseful = "NOT_USEFUL"
,    SomewhatUseful = "SOMEWHAT_USEFUL"
,    VeryUseful = "VERY_USEFUL"
}


// AlertFeedback
/** 
 * A customer feedback about an alert.
**/
export class AlertFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertId" })
  alertId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=feedbackId" })
  feedbackId?: string;

  @Metadata({ data: "json, name=type" })
  type?: AlertFeedbackTypeEnum;
}
