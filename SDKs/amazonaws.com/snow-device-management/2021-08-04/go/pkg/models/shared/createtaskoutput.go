package shared

type CreateTaskOutput struct {
	TaskArn *string `json:"taskArn"`
	TaskID  *string `json:"taskId"`
}
