package shared



type SectionTaskInsertRequest struct {
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Task string `json:"task"`
    
}

