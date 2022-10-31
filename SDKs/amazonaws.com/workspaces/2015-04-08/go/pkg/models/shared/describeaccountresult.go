package shared

type DescribeAccountResult struct {
	DedicatedTenancyManagementCidrRange *string                                `json:"DedicatedTenancyManagementCidrRange,omitempty"`
	DedicatedTenancySupport             *DedicatedTenancySupportResultEnumEnum `json:"DedicatedTenancySupport,omitempty"`
}
