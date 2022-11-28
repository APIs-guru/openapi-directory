package shared

// DeleteBatchPredictionOutput
// <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>
type DeleteBatchPredictionOutput struct {
	BatchPredictionID *string `json:"BatchPredictionId,omitempty"`
}
