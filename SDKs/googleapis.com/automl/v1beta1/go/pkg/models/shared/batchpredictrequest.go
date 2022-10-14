package shared

type BatchPredictRequest struct {
	InputConfig  *BatchPredictInputConfig  `json:"inputConfig,omitempty"`
	OutputConfig *BatchPredictOutputConfig `json:"outputConfig,omitempty"`
	Params       map[string]string         `json:"params,omitempty"`
}
