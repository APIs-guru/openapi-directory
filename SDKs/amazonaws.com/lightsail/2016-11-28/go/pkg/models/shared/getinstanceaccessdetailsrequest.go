package shared

type GetInstanceAccessDetailsRequest struct {
	InstanceName string                      `json:"instanceName"`
	Protocol     *InstanceAccessProtocolEnum `json:"protocol,omitempty"`
}
