package shared

// ActionCondition
// Conditions for actions to deal with task failures.
type ActionCondition struct {
	ExitCodes []int32 `json:"exitCodes,omitempty"`
}
