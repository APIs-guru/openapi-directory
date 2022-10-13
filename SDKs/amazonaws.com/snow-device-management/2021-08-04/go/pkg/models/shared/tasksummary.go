package shared

type TaskSummary struct {
	State   *TaskStateEnum    `json:"state"`
	Tags    map[string]string `json:"tags"`
	TaskArn *string           `json:"taskArn"`
	TaskID  string            `json:"taskId"`
}
