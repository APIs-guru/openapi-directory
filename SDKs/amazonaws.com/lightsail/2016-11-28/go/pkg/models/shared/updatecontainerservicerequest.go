package shared

type UpdateContainerServiceRequest struct {
	IsDisabled        *bool                          `json:"isDisabled,omitempty"`
	Power             *ContainerServicePowerNameEnum `json:"power,omitempty"`
	PublicDomainNames map[string][]string            `json:"publicDomainNames,omitempty"`
	Scale             *int64                         `json:"scale,omitempty"`
	ServiceName       string                         `json:"serviceName"`
}
