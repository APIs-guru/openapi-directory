package shared

type StartLambdaFunctionFailedEventAttributes struct {
	Cause            *StartLambdaFunctionFailedCauseEnum `json:"cause"`
	Message          *string                             `json:"message"`
	ScheduledEventID *int64                              `json:"scheduledEventId"`
}
