package shared

// S3ResourceClassificationUpdate
// The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action.
type S3ResourceClassificationUpdate struct {
	BucketName               string                   `json:"bucketName"`
	ClassificationTypeUpdate ClassificationTypeUpdate `json:"classificationTypeUpdate"`
	Prefix                   *string                  `json:"prefix,omitempty"`
}
