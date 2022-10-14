package shared

type CreateBucketRequest struct {
	BucketName             string `json:"bucketName"`
	BundleID               string `json:"bundleId"`
	EnableObjectVersioning *bool  `json:"enableObjectVersioning,omitempty"`
	Tags                   []Tag  `json:"tags,omitempty"`
}
