package shared



type UntagResourcesInput struct {
    ResourceArnList []string `json:"ResourceARNList"`
    TagKeys []string `json:"TagKeys"`
    
}

