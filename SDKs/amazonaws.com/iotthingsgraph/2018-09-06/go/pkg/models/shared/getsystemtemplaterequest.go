package shared



type GetSystemTemplateRequest struct {
    ID string `json:"id"`
    RevisionNumber *int64 `json:"revisionNumber,omitempty"`
    
}

