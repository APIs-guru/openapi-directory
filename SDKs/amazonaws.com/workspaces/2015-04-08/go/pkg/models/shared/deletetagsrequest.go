package shared



type DeleteTagsRequest struct {
    ResourceID string `json:"ResourceId"`
    TagKeys []string `json:"TagKeys"`
    
}

