package shared

type ResourceDataSyncS3Destination struct {
	AwskmsKeyArn           *string                                 `json:"AWSKMSKeyARN"`
	BucketName             string                                  `json:"BucketName"`
	DestinationDataSharing *ResourceDataSyncDestinationDataSharing `json:"DestinationDataSharing"`
	Prefix                 *string                                 `json:"Prefix"`
	Region                 string                                  `json:"Region"`
	SyncFormat             ResourceDataSyncS3FormatEnum            `json:"SyncFormat"`
}
