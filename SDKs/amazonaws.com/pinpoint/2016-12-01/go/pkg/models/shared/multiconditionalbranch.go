package shared

type MultiConditionalBranch struct {
	Condition    *SimpleCondition `json:"Condition,omitempty"`
	NextActivity *string          `json:"NextActivity,omitempty"`
}
