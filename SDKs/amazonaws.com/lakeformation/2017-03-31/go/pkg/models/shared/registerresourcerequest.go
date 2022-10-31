package shared



type RegisterResourceRequest struct {
    ResourceArn string `json:"ResourceArn"`
    RoleArn *string `json:"RoleArn,omitempty"`
    UseServiceLinkedRole *bool `json:"UseServiceLinkedRole,omitempty"`
    
}

