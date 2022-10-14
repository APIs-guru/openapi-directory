package shared

type ResourceDataSyncS3Destination struct {
	AwskmsKeyArn           *string                                 `json:"AWSKMSKeyARN,omitempty"`
	BucketName             string                                  `json:"BucketName"`
	DestinationDataSharing *ResourceDataSyncDestinationDataSharing `json:"DestinationDataSharing,omitempty"`
	Prefix                 *string                                 `json:"Prefix,omitempty"`
	Region                 string                                  `json:"Region"`
	SyncFormat             ResourceDataSyncS3FormatEnum            `json:"SyncFormat"`
}
