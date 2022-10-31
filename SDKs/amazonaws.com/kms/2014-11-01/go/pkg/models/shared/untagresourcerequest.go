package shared



type UntagResourceRequest struct {
    KeyID string `json:"KeyId"`
    TagKeys []string `json:"TagKeys"`
    
}

