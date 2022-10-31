package shared



type TagResourceRequest struct {
    ResourceID string `json:"ResourceId"`
    Tags []Tag `json:"Tags"`
    
}

