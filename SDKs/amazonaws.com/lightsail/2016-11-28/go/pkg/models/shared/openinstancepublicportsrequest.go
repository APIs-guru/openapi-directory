package shared

type OpenInstancePublicPortsRequest struct {
	InstanceName string   `json:"instanceName"`
	PortInfo     PortInfo `json:"portInfo"`
}
