package shared

type StopInstanceRequest struct {
	Force        *bool  `json:"force"`
	InstanceName string `json:"instanceName"`
}
