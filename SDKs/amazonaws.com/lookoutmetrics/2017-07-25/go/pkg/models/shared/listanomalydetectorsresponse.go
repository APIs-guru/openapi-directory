package shared



type ListAnomalyDetectorsResponse struct {
    AnomalyDetectorSummaryList []AnomalyDetectorSummary `json:"AnomalyDetectorSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

