package shared



type TaskSetParentRequest struct {
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Parent string `json:"parent"`
    
}

