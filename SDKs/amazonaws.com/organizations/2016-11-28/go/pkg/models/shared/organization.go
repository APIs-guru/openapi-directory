package shared

type Organization struct {
	Arn                  *string                     `json:"Arn"`
	AvailablePolicyTypes []PolicyTypeSummary         `json:"AvailablePolicyTypes"`
	FeatureSet           *OrganizationFeatureSetEnum `json:"FeatureSet"`
	ID                   *string                     `json:"Id"`
	MasterAccountArn     *string                     `json:"MasterAccountArn"`
	MasterAccountEmail   *string                     `json:"MasterAccountEmail"`
	MasterAccountID      *string                     `json:"MasterAccountId"`
}
