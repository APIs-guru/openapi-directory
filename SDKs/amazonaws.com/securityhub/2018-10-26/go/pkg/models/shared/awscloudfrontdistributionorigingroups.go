package shared

// AwsCloudFrontDistributionOriginGroups
// Provides information about origin groups that are associated with the distribution.
type AwsCloudFrontDistributionOriginGroups struct {
	Items []AwsCloudFrontDistributionOriginGroup `json:"Items,omitempty"`
}
