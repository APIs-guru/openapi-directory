package shared



type PutObjectResponse struct {
    ContentSha256 *string `json:"ContentSHA256,omitempty"`
    ETag *string `json:"ETag,omitempty"`
    StorageClass *StorageClassEnum `json:"StorageClass,omitempty"`
    
}

