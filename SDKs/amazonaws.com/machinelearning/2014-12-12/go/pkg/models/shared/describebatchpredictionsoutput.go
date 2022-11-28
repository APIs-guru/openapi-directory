package shared

// DescribeBatchPredictionsOutput
// Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
type DescribeBatchPredictionsOutput struct {
	NextToken *string           `json:"NextToken,omitempty"`
	Results   []BatchPrediction `json:"Results,omitempty"`
}
