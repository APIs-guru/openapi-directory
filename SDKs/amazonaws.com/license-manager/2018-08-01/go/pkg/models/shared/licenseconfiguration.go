package shared

// LicenseConfiguration
// A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.
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
