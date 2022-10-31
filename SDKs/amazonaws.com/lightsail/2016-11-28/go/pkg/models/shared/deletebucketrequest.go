package shared

type DeleteBucketRequest struct {
	BucketName  string `json:"bucketName"`
	ForceDelete *bool  `json:"forceDelete,omitempty"`
}
