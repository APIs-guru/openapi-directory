package shared



type UntagResourceRequest struct {
    ResourceArn string `json:"ResourceARN"`
    TagKeys []string `json:"TagKeys"`
    
}

