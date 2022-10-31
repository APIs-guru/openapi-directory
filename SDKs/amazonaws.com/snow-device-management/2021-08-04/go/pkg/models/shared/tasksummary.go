package shared



type TaskSummary struct {
    State *TaskStateEnum `json:"state,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TaskArn *string `json:"taskArn,omitempty"`
    TaskID string `json:"taskId"`
    
}

