package shared



type UpdateSizeConstraintSetRequest struct {
    ChangeToken string `json:"ChangeToken"`
    SizeConstraintSetID string `json:"SizeConstraintSetId"`
    Updates []SizeConstraintSetUpdate `json:"Updates"`
    
}

