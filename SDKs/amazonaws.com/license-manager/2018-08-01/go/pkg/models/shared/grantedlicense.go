package shared

type GrantedLicense struct {
	Beneficiary              *string                   `json:"Beneficiary"`
	ConsumptionConfiguration *ConsumptionConfiguration `json:"ConsumptionConfiguration"`
	CreateTime               *string                   `json:"CreateTime"`
	Entitlements             []Entitlement             `json:"Entitlements"`
	HomeRegion               *string                   `json:"HomeRegion"`
	Issuer                   *IssuerDetails            `json:"Issuer"`
	LicenseArn               *string                   `json:"LicenseArn"`
	LicenseMetadata          []Metadata                `json:"LicenseMetadata"`
	LicenseName              *string                   `json:"LicenseName"`
	ProductName              *string                   `json:"ProductName"`
	ProductSku               *string                   `json:"ProductSKU"`
	ReceivedMetadata         *ReceivedMetadata         `json:"ReceivedMetadata"`
	Status                   *LicenseStatusEnum        `json:"Status"`
	Validity                 *DatetimeRange            `json:"Validity"`
	Version                  *string                   `json:"Version"`
}
