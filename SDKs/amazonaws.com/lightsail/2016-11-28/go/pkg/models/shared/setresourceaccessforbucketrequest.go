package shared

type SetResourceAccessForBucketRequest struct {
	Access       ResourceBucketAccessEnum `json:"access"`
	BucketName   string                   `json:"bucketName"`
	ResourceName string                   `json:"resourceName"`
}
