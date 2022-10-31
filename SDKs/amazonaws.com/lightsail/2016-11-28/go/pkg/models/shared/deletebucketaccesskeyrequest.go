package shared

type DeleteBucketAccessKeyRequest struct {
	AccessKeyID string `json:"accessKeyId"`
	BucketName  string `json:"bucketName"`
}
