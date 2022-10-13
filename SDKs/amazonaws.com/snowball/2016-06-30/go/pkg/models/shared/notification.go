package shared

type Notification struct {
	JobStatesToNotify []JobStateEnum `json:"JobStatesToNotify"`
	NotifyAll         *bool          `json:"NotifyAll"`
	SnsTopicArn       *string        `json:"SnsTopicARN"`
}
