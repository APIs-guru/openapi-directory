package shared

type CloseInstancePublicPortsRequest struct {
	InstanceName string   `json:"instanceName"`
	PortInfo     PortInfo `json:"portInfo"`
}
