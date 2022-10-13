package shared

type CreateSizeConstraintSetResponse struct {
	ChangeToken       *string            `json:"ChangeToken"`
	SizeConstraintSet *SizeConstraintSet `json:"SizeConstraintSet"`
}
