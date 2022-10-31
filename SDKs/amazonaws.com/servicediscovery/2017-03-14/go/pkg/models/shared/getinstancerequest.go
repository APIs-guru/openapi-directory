package shared

type GetInstanceRequest struct {
	InstanceID string `json:"InstanceId"`
	ServiceID  string `json:"ServiceId"`
}
