package shared

type LicenseConfiguration struct {
	AutomatedDiscoveryInformation *AutomatedDiscoveryInformation `json:"AutomatedDiscoveryInformation,omitempty"`
	ConsumedLicenseSummaryList    []ConsumedLicenseSummary       `json:"ConsumedLicenseSummaryList,omitempty"`
	ConsumedLicenses              *int64                         `json:"ConsumedLicenses,omitempty"`
	Description                   *string                        `json:"Description,omitempty"`
	DisassociateWhenNotFound      *bool                          `json:"DisassociateWhenNotFound,omitempty"`
	LicenseConfigurationArn       *string                        `json:"LicenseConfigurationArn,omitempty"`
	LicenseConfigurationID        *string                        `json:"LicenseConfigurationId,omitempty"`
	LicenseCount                  *int64                         `json:"LicenseCount,omitempty"`
	LicenseCountHardLimit         *bool                          `json:"LicenseCountHardLimit,omitempty"`
	LicenseCountingType           *LicenseCountingTypeEnum       `json:"LicenseCountingType,omitempty"`
	LicenseRules                  []string                       `json:"LicenseRules,omitempty"`
	ManagedResourceSummaryList    []ManagedResourceSummary       `json:"ManagedResourceSummaryList,omitempty"`
	Name                          *string                        `json:"Name,omitempty"`
	OwnerAccountID                *string                        `json:"OwnerAccountId,omitempty"`
	ProductInformationList        []ProductInformation           `json:"ProductInformationList,omitempty"`
	Status                        *string                        `json:"Status,omitempty"`
}
