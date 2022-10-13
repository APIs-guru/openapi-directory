package shared

type AlertFeedbackTypeEnum string

const (
	AlertFeedbackTypeEnumAlertFeedbackTypeUnspecified AlertFeedbackTypeEnum = "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
	AlertFeedbackTypeEnumNotUseful                    AlertFeedbackTypeEnum = "NOT_USEFUL"
	AlertFeedbackTypeEnumSomewhatUseful               AlertFeedbackTypeEnum = "SOMEWHAT_USEFUL"
	AlertFeedbackTypeEnumVeryUseful                   AlertFeedbackTypeEnum = "VERY_USEFUL"
)

type AlertFeedback struct {
	AlertID    *string                `json:"alertId"`
	CreateTime *string                `json:"createTime"`
	CustomerID *string                `json:"customerId"`
	Email      *string                `json:"email"`
	FeedbackID *string                `json:"feedbackId"`
	Type       *AlertFeedbackTypeEnum `json:"type"`
}
