package shared

type UpdateServiceSettingsRequest struct {
	EnableCrossAccountsDiscovery *bool                      `json:"EnableCrossAccountsDiscovery"`
	OrganizationConfiguration    *OrganizationConfiguration `json:"OrganizationConfiguration"`
	S3BucketArn                  *string                    `json:"S3BucketArn"`
	SnsTopicArn                  *string                    `json:"SnsTopicArn"`
}
