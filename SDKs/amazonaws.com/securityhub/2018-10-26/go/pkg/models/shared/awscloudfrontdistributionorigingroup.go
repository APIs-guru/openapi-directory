package shared

// AwsCloudFrontDistributionOriginGroup
// Information about an origin group for the distribution.
type AwsCloudFrontDistributionOriginGroup struct {
	FailoverCriteria *AwsCloudFrontDistributionOriginGroupFailover `json:"FailoverCriteria,omitempty"`
}
