package shared



type CreateAdditionalAssignmentsForHitRequest struct {
    HitID string `json:"HITId"`
    NumberOfAdditionalAssignments int64 `json:"NumberOfAdditionalAssignments"`
    UniqueRequestToken *string `json:"UniqueRequestToken,omitempty"`
    
}

