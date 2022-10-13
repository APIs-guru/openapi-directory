package shared

type S3OutputLocation struct {
	OutputS3BucketName *string `json:"OutputS3BucketName"`
	OutputS3KeyPrefix  *string `json:"OutputS3KeyPrefix"`
	OutputS3Region     *string `json:"OutputS3Region"`
}
