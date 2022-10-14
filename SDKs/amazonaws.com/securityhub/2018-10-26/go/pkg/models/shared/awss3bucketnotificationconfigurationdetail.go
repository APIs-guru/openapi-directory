package shared

type AwsS3BucketNotificationConfigurationDetail struct {
	Destination *string                                     `json:"Destination,omitempty"`
	Events      []string                                    `json:"Events,omitempty"`
	Filter      *AwsS3BucketNotificationConfigurationFilter `json:"Filter,omitempty"`
	Type        *string                                     `json:"Type,omitempty"`
}
