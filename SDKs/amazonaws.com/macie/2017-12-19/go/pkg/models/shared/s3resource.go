package shared

// S3Resource
// Contains information about the S3 resource. This data type is used as a request parameter in the DisassociateS3Resources action and can be used as a response parameter in the AssociateS3Resources and UpdateS3Resources actions.
type S3Resource struct {
	BucketName string  `json:"bucketName"`
	Prefix     *string `json:"prefix,omitempty"`
}
