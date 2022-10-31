package shared



type UpdateServiceInput struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Spec *string `json:"spec,omitempty"`
    
}

