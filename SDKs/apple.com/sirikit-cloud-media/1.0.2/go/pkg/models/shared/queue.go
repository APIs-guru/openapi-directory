package shared



type Queue struct {
    Content []Content `json:"content"`
    ContentItemsCount *int64 `json:"contentItemsCount,omitempty"`
    Controls map[string]PlayMediaControl `json:"controls,omitempty"`
    Identifier string `json:"identifier"`
    InsertPointer *interface{} `json:"insertPointer,omitempty"`
    NextContentURL *string `json:"nextContentUrl,omitempty"`
    PlayPointer *QueuePlayPointer `json:"playPointer,omitempty"`
    PrerollSeconds *float64 `json:"prerollSeconds,omitempty"`
    PreviousContentURL *string `json:"previousContentUrl,omitempty"`
    SkipsRemaining *int64 `json:"skipsRemaining,omitempty"`
    Version string `json:"version"`
    
}

