package shared

type PositionalConstraintEnum string

const (
	PositionalConstraintEnumExactly      PositionalConstraintEnum = "EXACTLY"
	PositionalConstraintEnumStartsWith   PositionalConstraintEnum = "STARTS_WITH"
	PositionalConstraintEnumEndsWith     PositionalConstraintEnum = "ENDS_WITH"
	PositionalConstraintEnumContains     PositionalConstraintEnum = "CONTAINS"
	PositionalConstraintEnumContainsWord PositionalConstraintEnum = "CONTAINS_WORD"
)
