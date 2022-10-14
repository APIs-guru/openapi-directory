package shared

type CreateConstraintOutput struct {
	ConstraintDetail     *ConstraintDetail `json:"ConstraintDetail,omitempty"`
	ConstraintParameters *string           `json:"ConstraintParameters,omitempty"`
	Status               *StatusEnum       `json:"Status,omitempty"`
}
