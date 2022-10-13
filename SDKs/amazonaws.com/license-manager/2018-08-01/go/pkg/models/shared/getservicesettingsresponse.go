package shared

type GetServiceSettingsResponse struct {
	EnableCrossAccountsDiscovery   *bool                      `json:"EnableCrossAccountsDiscovery"`
	LicenseManagerResourceShareArn *string                    `json:"LicenseManagerResourceShareArn"`
	OrganizationConfiguration      *OrganizationConfiguration `json:"OrganizationConfiguration"`
	S3BucketArn                    *string                    `json:"S3BucketArn"`
	SnsTopicArn                    *string                    `json:"SnsTopicArn"`
}
