package shared

type GrantedLicense struct {
	Beneficiary              *string                   `json:"Beneficiary,omitempty"`
	ConsumptionConfiguration *ConsumptionConfiguration `json:"ConsumptionConfiguration,omitempty"`
	CreateTime               *string                   `json:"CreateTime,omitempty"`
	Entitlements             []Entitlement             `json:"Entitlements,omitempty"`
	HomeRegion               *string                   `json:"HomeRegion,omitempty"`
	Issuer                   *IssuerDetails            `json:"Issuer,omitempty"`
	LicenseArn               *string                   `json:"LicenseArn,omitempty"`
	LicenseMetadata          []Metadata                `json:"LicenseMetadata,omitempty"`
	LicenseName              *string                   `json:"LicenseName,omitempty"`
	ProductName              *string                   `json:"ProductName,omitempty"`
	ProductSku               *string                   `json:"ProductSKU,omitempty"`
	ReceivedMetadata         *ReceivedMetadata         `json:"ReceivedMetadata,omitempty"`
	Status                   *LicenseStatusEnum        `json:"Status,omitempty"`
	Validity                 *DatetimeRange            `json:"Validity,omitempty"`
	Version                  *string                   `json:"Version,omitempty"`
}
