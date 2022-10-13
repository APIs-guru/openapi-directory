package shared

type ModifyAccountRequest struct {
	DedicatedTenancyManagementCidrRange *string                          `json:"DedicatedTenancyManagementCidrRange"`
	DedicatedTenancySupport             *DedicatedTenancySupportEnumEnum `json:"DedicatedTenancySupport"`
}
