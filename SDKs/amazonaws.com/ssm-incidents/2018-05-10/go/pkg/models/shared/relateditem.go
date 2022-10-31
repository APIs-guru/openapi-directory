package shared



type RelatedItem struct {
    Identifier ItemIdentifier `json:"identifier"`
    Title *string `json:"title,omitempty"`
    
}

