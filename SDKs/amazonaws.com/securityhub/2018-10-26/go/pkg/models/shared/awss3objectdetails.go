package shared

type AwsS3ObjectDetails struct {
	ContentType          *string `json:"ContentType"`
	ETag                 *string `json:"ETag"`
	LastModified         *string `json:"LastModified"`
	SsekmsKeyID          *string `json:"SSEKMSKeyId"`
	ServerSideEncryption *string `json:"ServerSideEncryption"`
	VersionID            *string `json:"VersionId"`
}
