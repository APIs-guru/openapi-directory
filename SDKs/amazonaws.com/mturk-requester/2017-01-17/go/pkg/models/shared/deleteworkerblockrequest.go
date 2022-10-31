package shared



type DeleteWorkerBlockRequest struct {
    Reason *string `json:"Reason,omitempty"`
    WorkerID string `json:"WorkerId"`
    
}

