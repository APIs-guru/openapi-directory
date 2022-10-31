package shared



type UntagResourceRequest struct {
    ResourceArn *string `json:"resourceArn,omitempty"`
    ResourceName string `json:"resourceName"`
    TagKeys []string `json:"tagKeys"`
    
}

