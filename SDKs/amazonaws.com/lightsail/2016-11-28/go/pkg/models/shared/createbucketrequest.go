package shared

type CreateBucketRequest struct {
	BucketName             string `json:"bucketName"`
	BundleID               string `json:"bundleId"`
	EnableObjectVersioning *bool  `json:"enableObjectVersioning"`
	Tags                   []Tag  `json:"tags"`
}
