package shared

type ClassificationDetails struct {
	DetailedResultsLocation *string               `json:"detailedResultsLocation"`
	JobArn                  *string               `json:"jobArn"`
	JobID                   *string               `json:"jobId"`
	Result                  *ClassificationResult `json:"result"`
}
