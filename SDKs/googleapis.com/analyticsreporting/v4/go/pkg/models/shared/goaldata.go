package shared

// GoalData
// Represents all the details pertaining to a goal.
type GoalData struct {
	GoalCompletionLocation *string  `json:"goalCompletionLocation,omitempty"`
	GoalCompletions        *string  `json:"goalCompletions,omitempty"`
	GoalIndex              *int32   `json:"goalIndex,omitempty"`
	GoalName               *string  `json:"goalName,omitempty"`
	GoalPreviousStep1      *string  `json:"goalPreviousStep1,omitempty"`
	GoalPreviousStep2      *string  `json:"goalPreviousStep2,omitempty"`
	GoalPreviousStep3      *string  `json:"goalPreviousStep3,omitempty"`
	GoalValue              *float64 `json:"goalValue,omitempty"`
}
