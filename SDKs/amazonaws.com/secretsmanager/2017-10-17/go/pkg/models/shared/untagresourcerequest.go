package shared



type UntagResourceRequest struct {
    SecretID string `json:"SecretId"`
    TagKeys []string `json:"TagKeys"`
    
}

