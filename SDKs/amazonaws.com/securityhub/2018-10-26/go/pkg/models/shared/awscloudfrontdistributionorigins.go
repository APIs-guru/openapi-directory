package shared

// AwsCloudFrontDistributionOrigins
// A complex type that contains information about origins and origin groups for this distribution.
type AwsCloudFrontDistributionOrigins struct {
	Items []AwsCloudFrontDistributionOriginItem `json:"Items,omitempty"`
}
