package shared

// S3ResourceClassification
// The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action.
type S3ResourceClassification struct {
	BucketName         string             `json:"bucketName"`
	ClassificationType ClassificationType `json:"classificationType"`
	Prefix             *string            `json:"prefix,omitempty"`
}
