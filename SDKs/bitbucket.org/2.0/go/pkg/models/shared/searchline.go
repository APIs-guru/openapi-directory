package shared



type SearchLine struct {
    Line *int32 `json:"line,omitempty"`
    Segments []SearchSegment `json:"segments,omitempty"`
    
}

