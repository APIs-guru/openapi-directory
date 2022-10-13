package shared

type SizeConstraintSet struct {
	Name                *string          `json:"Name"`
	SizeConstraintSetID string           `json:"SizeConstraintSetId"`
	SizeConstraints     []SizeConstraint `json:"SizeConstraints"`
}
