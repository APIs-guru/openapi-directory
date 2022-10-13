package shared

type StopInstanceRequest struct {
	Force      *bool  `json:"Force"`
	InstanceID string `json:"InstanceId"`
}
