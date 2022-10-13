package shared

type MultiConditionalBranch struct {
	Condition    *SimpleCondition `json:"Condition"`
	NextActivity *string          `json:"NextActivity"`
}
