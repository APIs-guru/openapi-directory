package shared

// AwsS3BucketNotificationConfigurationDetail
// Details for an S3 bucket notification configuration.
type AwsS3BucketNotificationConfigurationDetail struct {
	Destination *string                                     `json:"Destination,omitempty"`
	Events      []string                                    `json:"Events,omitempty"`
	Filter      *AwsS3BucketNotificationConfigurationFilter `json:"Filter,omitempty"`
	Type        *string                                     `json:"Type,omitempty"`
}
