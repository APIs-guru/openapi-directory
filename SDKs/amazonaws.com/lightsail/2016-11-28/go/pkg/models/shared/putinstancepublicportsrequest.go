package shared

type PutInstancePublicPortsRequest struct {
	InstanceName string     `json:"instanceName"`
	PortInfos    []PortInfo `json:"portInfos"`
}
