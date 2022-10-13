package shared

type AwsS3BucketNotificationConfigurationDetail struct {
	Destination *string                                     `json:"Destination"`
	Events      []string                                    `json:"Events"`
	Filter      *AwsS3BucketNotificationConfigurationFilter `json:"Filter"`
	Type        *string                                     `json:"Type"`
}
