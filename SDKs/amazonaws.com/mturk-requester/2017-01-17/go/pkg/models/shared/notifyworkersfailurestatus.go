package shared

// NotifyWorkersFailureStatus
//
//	When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.
type NotifyWorkersFailureStatus struct {
	NotifyWorkersFailureCode    *NotifyWorkersFailureCodeEnum `json:"NotifyWorkersFailureCode,omitempty"`
	NotifyWorkersFailureMessage *string                       `json:"NotifyWorkersFailureMessage,omitempty"`
	WorkerID                    *string                       `json:"WorkerId,omitempty"`
}
