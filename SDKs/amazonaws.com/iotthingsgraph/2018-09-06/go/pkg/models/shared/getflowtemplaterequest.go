package shared



type GetFlowTemplateRequest struct {
    ID string `json:"id"`
    RevisionNumber *int64 `json:"revisionNumber,omitempty"`
    
}

