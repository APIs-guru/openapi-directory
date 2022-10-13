package shared

type DescribeAccountResult struct {
	DedicatedTenancyManagementCidrRange *string                                `json:"DedicatedTenancyManagementCidrRange"`
	DedicatedTenancySupport             *DedicatedTenancySupportResultEnumEnum `json:"DedicatedTenancySupport"`
}
