package shared



type TagResourceRequest struct {
    ResourceArn *string `json:"resourceArn,omitempty"`
    ResourceName string `json:"resourceName"`
    Tags []Tag `json:"tags"`
    
}

