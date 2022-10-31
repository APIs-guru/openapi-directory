package shared



type GetActivityTaskInput struct {
    ActivityArn string `json:"activityArn"`
    WorkerName *string `json:"workerName,omitempty"`
    
}

