package shared

type UpdateContainerServiceRequest struct {
	IsDisabled        *bool                          `json:"isDisabled"`
	Power             *ContainerServicePowerNameEnum `json:"power"`
	PublicDomainNames map[string][]string            `json:"publicDomainNames"`
	Scale             *int64                         `json:"scale"`
	ServiceName       string                         `json:"serviceName"`
}
