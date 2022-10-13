package shared

type DescribeBatchPredictionsOutput struct {
	NextToken *string           `json:"NextToken"`
	Results   []BatchPrediction `json:"Results"`
}
