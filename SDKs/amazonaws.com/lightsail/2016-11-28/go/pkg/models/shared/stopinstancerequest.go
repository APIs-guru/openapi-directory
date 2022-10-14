package shared

type StopInstanceRequest struct {
	Force        *bool  `json:"force,omitempty"`
	InstanceName string `json:"instanceName"`
}
