package shared

type NotifyWorkersFailureStatus struct {
	NotifyWorkersFailureCode    *NotifyWorkersFailureCodeEnum `json:"NotifyWorkersFailureCode"`
	NotifyWorkersFailureMessage *string                       `json:"NotifyWorkersFailureMessage"`
	WorkerID                    *string                       `json:"WorkerId"`
}
