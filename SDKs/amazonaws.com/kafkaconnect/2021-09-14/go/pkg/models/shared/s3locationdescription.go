package shared

type S3LocationDescription struct {
	BucketArn     *string `json:"bucketArn"`
	FileKey       *string `json:"fileKey"`
	ObjectVersion *string `json:"objectVersion"`
}
