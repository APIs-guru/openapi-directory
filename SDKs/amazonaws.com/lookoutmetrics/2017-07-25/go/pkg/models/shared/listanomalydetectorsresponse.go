package shared

type ListAnomalyDetectorsResponse struct {
	AnomalyDetectorSummaryList []AnomalyDetectorSummary `json:"AnomalyDetectorSummaryList"`
	NextToken                  *string                  `json:"NextToken"`
}
