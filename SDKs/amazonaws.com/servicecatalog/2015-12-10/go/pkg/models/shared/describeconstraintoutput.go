package shared

type DescribeConstraintOutput struct {
	ConstraintDetail     *ConstraintDetail `json:"ConstraintDetail"`
	ConstraintParameters *string           `json:"ConstraintParameters"`
	Status               *StatusEnum       `json:"Status"`
}
