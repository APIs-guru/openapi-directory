package shared



type UpdateServiceSettingsRequest struct {
    EnableCrossAccountsDiscovery *bool `json:"EnableCrossAccountsDiscovery,omitempty"`
    OrganizationConfiguration *OrganizationConfiguration `json:"OrganizationConfiguration,omitempty"`
    S3BucketArn *string `json:"S3BucketArn,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    
}

