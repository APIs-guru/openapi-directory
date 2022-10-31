package shared

type CreateSizeConstraintSetResponse struct {
	ChangeToken       *string            `json:"ChangeToken,omitempty"`
	SizeConstraintSet *SizeConstraintSet `json:"SizeConstraintSet,omitempty"`
}
