package shared

// MultiConditionalBranch
// Specifies a condition to evaluate for an activity path in a journey.
type MultiConditionalBranch struct {
	Condition    *SimpleCondition `json:"Condition,omitempty"`
	NextActivity *string          `json:"NextActivity,omitempty"`
}
