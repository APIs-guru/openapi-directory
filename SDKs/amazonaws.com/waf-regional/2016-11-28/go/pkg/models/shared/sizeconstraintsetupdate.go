package shared



type SizeConstraintSetUpdate struct {
    Action ChangeActionEnum `json:"Action"`
    SizeConstraint SizeConstraint `json:"SizeConstraint"`
    
}

