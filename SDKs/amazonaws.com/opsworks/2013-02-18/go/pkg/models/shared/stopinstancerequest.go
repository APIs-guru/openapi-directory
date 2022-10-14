package shared

type StopInstanceRequest struct {
	Force      *bool  `json:"Force,omitempty"`
	InstanceID string `json:"InstanceId"`
}
