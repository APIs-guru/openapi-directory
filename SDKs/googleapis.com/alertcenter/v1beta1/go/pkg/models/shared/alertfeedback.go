package shared

type AlertFeedbackTypeEnum string

const (
	AlertFeedbackTypeEnumAlertFeedbackTypeUnspecified AlertFeedbackTypeEnum = "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
	AlertFeedbackTypeEnumNotUseful                    AlertFeedbackTypeEnum = "NOT_USEFUL"
	AlertFeedbackTypeEnumSomewhatUseful               AlertFeedbackTypeEnum = "SOMEWHAT_USEFUL"
	AlertFeedbackTypeEnumVeryUseful                   AlertFeedbackTypeEnum = "VERY_USEFUL"
)

type AlertFeedback struct {
	AlertID    *string                `json:"alertId,omitempty"`
	CreateTime *string                `json:"createTime,omitempty"`
	CustomerID *string                `json:"customerId,omitempty"`
	Email      *string                `json:"email,omitempty"`
	FeedbackID *string                `json:"feedbackId,omitempty"`
	Type       *AlertFeedbackTypeEnum `json:"type,omitempty"`
}
