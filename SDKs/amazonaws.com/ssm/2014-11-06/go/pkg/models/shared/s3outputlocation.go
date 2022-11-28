package shared

// S3OutputLocation
// An S3 bucket where you want to store the results of this request.
type S3OutputLocation struct {
	OutputS3BucketName *string `json:"OutputS3BucketName,omitempty"`
	OutputS3KeyPrefix  *string `json:"OutputS3KeyPrefix,omitempty"`
	OutputS3Region     *string `json:"OutputS3Region,omitempty"`
}
