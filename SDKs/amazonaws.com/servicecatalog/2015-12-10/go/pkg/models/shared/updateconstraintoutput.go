package shared

type UpdateConstraintOutput struct {
	ConstraintDetail     *ConstraintDetail `json:"ConstraintDetail"`
	ConstraintParameters *string           `json:"ConstraintParameters"`
	Status               *StatusEnum       `json:"Status"`
}
