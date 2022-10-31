package shared



type GetLfTagResponse struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    TagKey *string `json:"TagKey,omitempty"`
    TagValues []string `json:"TagValues,omitempty"`
    
}

