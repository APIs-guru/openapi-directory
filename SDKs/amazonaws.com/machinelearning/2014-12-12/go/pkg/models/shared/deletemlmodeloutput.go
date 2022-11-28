package shared

// DeleteMlModelOutput
// <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>
type DeleteMlModelOutput struct {
	MlModelID *string `json:"MLModelId,omitempty"`
}
