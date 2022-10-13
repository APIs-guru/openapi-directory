package shared

type CancelCommandRequest struct {
	CommandID   string   `json:"CommandId"`
	InstanceIds []string `json:"InstanceIds"`
}
