package shared

type UpdateBucketBundleRequest struct {
	BucketName string `json:"bucketName"`
	BundleID   string `json:"bundleId"`
}
