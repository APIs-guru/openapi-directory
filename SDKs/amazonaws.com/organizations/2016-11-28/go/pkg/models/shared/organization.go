package shared



type Organization struct {
    Arn *string `json:"Arn,omitempty"`
    AvailablePolicyTypes []PolicyTypeSummary `json:"AvailablePolicyTypes,omitempty"`
    FeatureSet *OrganizationFeatureSetEnum `json:"FeatureSet,omitempty"`
    ID *string `json:"Id,omitempty"`
    MasterAccountArn *string `json:"MasterAccountArn,omitempty"`
    MasterAccountEmail *string `json:"MasterAccountEmail,omitempty"`
    MasterAccountID *string `json:"MasterAccountId,omitempty"`
    
}

