package shared

// AwsCloudTrailTrailDetails
// Provides details about a CloudTrail trail.
type AwsCloudTrailTrailDetails struct {
	CloudWatchLogsLogGroupArn  *string `json:"CloudWatchLogsLogGroupArn,omitempty"`
	CloudWatchLogsRoleArn      *string `json:"CloudWatchLogsRoleArn,omitempty"`
	HasCustomEventSelectors    *bool   `json:"HasCustomEventSelectors,omitempty"`
	HomeRegion                 *string `json:"HomeRegion,omitempty"`
	IncludeGlobalServiceEvents *bool   `json:"IncludeGlobalServiceEvents,omitempty"`
	IsMultiRegionTrail         *bool   `json:"IsMultiRegionTrail,omitempty"`
	IsOrganizationTrail        *bool   `json:"IsOrganizationTrail,omitempty"`
	KmsKeyID                   *string `json:"KmsKeyId,omitempty"`
	LogFileValidationEnabled   *bool   `json:"LogFileValidationEnabled,omitempty"`
	Name                       *string `json:"Name,omitempty"`
	S3BucketName               *string `json:"S3BucketName,omitempty"`
	S3KeyPrefix                *string `json:"S3KeyPrefix,omitempty"`
	SnsTopicArn                *string `json:"SnsTopicArn,omitempty"`
	SnsTopicName               *string `json:"SnsTopicName,omitempty"`
	TrailArn                   *string `json:"TrailArn,omitempty"`
}
