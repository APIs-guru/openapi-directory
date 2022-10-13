package shared

type DescribeOrganizationConfigurationResponse struct {
	AutoEnable                *bool `json:"AutoEnable"`
	MemberAccountLimitReached *bool `json:"MemberAccountLimitReached"`
}
