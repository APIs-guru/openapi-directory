package shared



type TaskAddProjectRequest struct {
    InsertAfter *string `json:"insert_after,omitempty"`
    InsertBefore *string `json:"insert_before,omitempty"`
    Project string `json:"project"`
    Section *string `json:"section,omitempty"`
    
}

