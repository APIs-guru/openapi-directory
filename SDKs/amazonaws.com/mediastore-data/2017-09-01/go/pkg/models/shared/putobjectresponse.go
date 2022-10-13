package shared

type PutObjectResponse struct {
	ContentSha256 *string           `json:"ContentSHA256"`
	ETag          *string           `json:"ETag"`
	StorageClass  *StorageClassEnum `json:"StorageClass"`
}
