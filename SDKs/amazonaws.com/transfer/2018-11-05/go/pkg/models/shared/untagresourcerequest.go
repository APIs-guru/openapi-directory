package shared



type UntagResourceRequest struct {
    Arn string `json:"Arn"`
    TagKeys []string `json:"TagKeys"`
    
}

