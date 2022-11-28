package shared

// Prediction
// <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>
type Prediction struct {
	Details         map[string]string  `json:"details,omitempty"`
	PredictedLabel  *string            `json:"predictedLabel,omitempty"`
	PredictedScores map[string]float32 `json:"predictedScores,omitempty"`
	PredictedValue  *float32           `json:"predictedValue,omitempty"`
}
