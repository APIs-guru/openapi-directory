package shared



type PageMetadata struct {
    Description *string `json:"description,omitempty"`
    Keywords []string `json:"keywords,omitempty"`
    Segments []string `json:"segments,omitempty"`
    
}

