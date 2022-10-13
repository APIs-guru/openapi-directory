package shared

type AwsCloudTrailTrailDetails struct {
	CloudWatchLogsLogGroupArn  *string `json:"CloudWatchLogsLogGroupArn"`
	CloudWatchLogsRoleArn      *string `json:"CloudWatchLogsRoleArn"`
	HasCustomEventSelectors    *bool   `json:"HasCustomEventSelectors"`
	HomeRegion                 *string `json:"HomeRegion"`
	IncludeGlobalServiceEvents *bool   `json:"IncludeGlobalServiceEvents"`
	IsMultiRegionTrail         *bool   `json:"IsMultiRegionTrail"`
	IsOrganizationTrail        *bool   `json:"IsOrganizationTrail"`
	KmsKeyID                   *string `json:"KmsKeyId"`
	LogFileValidationEnabled   *bool   `json:"LogFileValidationEnabled"`
	Name                       *string `json:"Name"`
	S3BucketName               *string `json:"S3BucketName"`
	S3KeyPrefix                *string `json:"S3KeyPrefix"`
	SnsTopicArn                *string `json:"SnsTopicArn"`
	SnsTopicName               *string `json:"SnsTopicName"`
	TrailArn                   *string `json:"TrailArn"`
}
