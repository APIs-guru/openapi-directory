package shared

// BatchPredictRequest
// Request message for PredictionService.BatchPredict.
type BatchPredictRequest struct {
	InputConfig  *BatchPredictInputConfig  `json:"inputConfig,omitempty"`
	OutputConfig *BatchPredictOutputConfig `json:"outputConfig,omitempty"`
	Params       map[string]string         `json:"params,omitempty"`
}
