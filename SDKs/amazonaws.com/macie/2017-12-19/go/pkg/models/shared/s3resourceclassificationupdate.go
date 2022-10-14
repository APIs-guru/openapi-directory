package shared

type S3ResourceClassificationUpdate struct {
	BucketName               string                   `json:"bucketName"`
	ClassificationTypeUpdate ClassificationTypeUpdate `json:"classificationTypeUpdate"`
	Prefix                   *string                  `json:"prefix,omitempty"`
}
