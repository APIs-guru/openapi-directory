package shared



type SizeConstraintSet struct {
    Name *string `json:"Name,omitempty"`
    SizeConstraintSetID string `json:"SizeConstraintSetId"`
    SizeConstraints []SizeConstraint `json:"SizeConstraints"`
    
}

