package shared

// Condition
// Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
type Condition struct {
	Conditions []SimpleCondition `json:"Conditions,omitempty"`
	Operator   *OperatorEnum     `json:"Operator,omitempty"`
}
