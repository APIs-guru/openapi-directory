package shared



type NotifyWorkersFailureStatus struct {
    NotifyWorkersFailureCode *NotifyWorkersFailureCodeEnum `json:"NotifyWorkersFailureCode,omitempty"`
    NotifyWorkersFailureMessage *string `json:"NotifyWorkersFailureMessage,omitempty"`
    WorkerID *string `json:"WorkerId,omitempty"`
    
}

