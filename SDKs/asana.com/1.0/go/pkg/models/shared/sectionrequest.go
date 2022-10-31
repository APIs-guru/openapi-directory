package shared



type SectionRequest struct {
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Name string `json:"name"`
    Project string `json:"project"`
    
}

