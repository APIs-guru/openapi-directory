package shared

// UpdateEvaluationOutput
// <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>
type UpdateEvaluationOutput struct {
	EvaluationID *string `json:"EvaluationId,omitempty"`
}
