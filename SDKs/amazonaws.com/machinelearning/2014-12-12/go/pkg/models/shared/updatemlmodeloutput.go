package shared

// UpdateMlModelOutput
// <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
type UpdateMlModelOutput struct {
	MlModelID *string `json:"MLModelId,omitempty"`
}
