package shared



type BulkEmailEntry struct {
    Destination Destination `json:"Destination"`
    ReplacementEmailContent *ReplacementEmailContent `json:"ReplacementEmailContent,omitempty"`
    ReplacementTags []MessageTag `json:"ReplacementTags,omitempty"`
    
}

