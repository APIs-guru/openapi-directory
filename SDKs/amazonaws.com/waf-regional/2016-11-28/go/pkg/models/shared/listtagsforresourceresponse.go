package shared



type ListTagsForResourceResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    TagInfoForResource *TagInfoForResource `json:"TagInfoForResource,omitempty"`
    
}

