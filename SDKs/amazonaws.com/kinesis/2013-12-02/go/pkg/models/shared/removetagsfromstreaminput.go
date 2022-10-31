package shared



type RemoveTagsFromStreamInput struct {
    StreamName string `json:"StreamName"`
    TagKeys []string `json:"TagKeys"`
    
}

