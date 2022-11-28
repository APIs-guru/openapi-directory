package shared

// Organization
// Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
type Organization struct {
	Arn                  *string                     `json:"Arn,omitempty"`
	AvailablePolicyTypes []PolicyTypeSummary         `json:"AvailablePolicyTypes,omitempty"`
	FeatureSet           *OrganizationFeatureSetEnum `json:"FeatureSet,omitempty"`
	ID                   *string                     `json:"Id,omitempty"`
	MasterAccountArn     *string                     `json:"MasterAccountArn,omitempty"`
	MasterAccountEmail   *string                     `json:"MasterAccountEmail,omitempty"`
	MasterAccountID      *string                     `json:"MasterAccountId,omitempty"`
}
