package shared



type NotifyWorkersRequest struct {
    MessageText string `json:"MessageText"`
    Subject string `json:"Subject"`
    WorkerIds []string `json:"WorkerIds"`
    
}

