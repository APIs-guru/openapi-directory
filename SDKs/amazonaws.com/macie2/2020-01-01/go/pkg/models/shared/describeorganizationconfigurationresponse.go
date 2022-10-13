package shared

type DescribeOrganizationConfigurationResponse struct {
	AutoEnable             *bool `json:"autoEnable"`
	MaxAccountLimitReached *bool `json:"maxAccountLimitReached"`
}
