package shared

type DescribeBatchPredictionsOutput struct {
	NextToken *string           `json:"NextToken,omitempty"`
	Results   []BatchPrediction `json:"Results,omitempty"`
}
