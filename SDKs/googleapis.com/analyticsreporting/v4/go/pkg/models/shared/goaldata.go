package shared

type GoalData struct {
	GoalCompletionLocation *string  `json:"goalCompletionLocation"`
	GoalCompletions        *string  `json:"goalCompletions"`
	GoalIndex              *int32   `json:"goalIndex"`
	GoalName               *string  `json:"goalName"`
	GoalPreviousStep1      *string  `json:"goalPreviousStep1"`
	GoalPreviousStep2      *string  `json:"goalPreviousStep2"`
	GoalPreviousStep3      *string  `json:"goalPreviousStep3"`
	GoalValue              *float64 `json:"goalValue"`
}
