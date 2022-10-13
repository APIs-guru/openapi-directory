package shared

type BatchPredictRequest struct {
	InputConfig  *BatchPredictInputConfig  `json:"inputConfig"`
	OutputConfig *BatchPredictOutputConfig `json:"outputConfig"`
	Params       map[string]string         `json:"params"`
}
