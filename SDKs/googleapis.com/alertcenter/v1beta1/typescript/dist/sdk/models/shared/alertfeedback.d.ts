import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AlertFeedbackTypeEnum {
    AlertFeedbackTypeUnspecified = "ALERT_FEEDBACK_TYPE_UNSPECIFIED",
    NotUseful = "NOT_USEFUL",
    SomewhatUseful = "SOMEWHAT_USEFUL",
    VeryUseful = "VERY_USEFUL"
}
/**
 * A customer feedback about an alert.
**/
export declare class AlertFeedback extends SpeakeasyBase {
    alertId?: string;
    createTime?: string;
    customerId?: string;
    email?: string;
    feedbackId?: string;
    type?: AlertFeedbackTypeEnum;
}
