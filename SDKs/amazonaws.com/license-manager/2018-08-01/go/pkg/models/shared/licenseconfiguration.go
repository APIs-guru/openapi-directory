package shared

type LicenseConfiguration struct {
	AutomatedDiscoveryInformation *AutomatedDiscoveryInformation `json:"AutomatedDiscoveryInformation"`
	ConsumedLicenseSummaryList    []ConsumedLicenseSummary       `json:"ConsumedLicenseSummaryList"`
	ConsumedLicenses              *int64                         `json:"ConsumedLicenses"`
	Description                   *string                        `json:"Description"`
	DisassociateWhenNotFound      *bool                          `json:"DisassociateWhenNotFound"`
	LicenseConfigurationArn       *string                        `json:"LicenseConfigurationArn"`
	LicenseConfigurationID        *string                        `json:"LicenseConfigurationId"`
	LicenseCount                  *int64                         `json:"LicenseCount"`
	LicenseCountHardLimit         *bool                          `json:"LicenseCountHardLimit"`
	LicenseCountingType           *LicenseCountingTypeEnum       `json:"LicenseCountingType"`
	LicenseRules                  []string                       `json:"LicenseRules"`
	ManagedResourceSummaryList    []ManagedResourceSummary       `json:"ManagedResourceSummaryList"`
	Name                          *string                        `json:"Name"`
	OwnerAccountID                *string                        `json:"OwnerAccountId"`
	ProductInformationList        []ProductInformation           `json:"ProductInformationList"`
	Status                        *string                        `json:"Status"`
}
