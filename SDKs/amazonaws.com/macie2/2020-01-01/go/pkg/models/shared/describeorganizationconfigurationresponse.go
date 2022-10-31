package shared

type DescribeOrganizationConfigurationResponse struct {
	AutoEnable             *bool `json:"autoEnable,omitempty"`
	MaxAccountLimitReached *bool `json:"maxAccountLimitReached,omitempty"`
}
