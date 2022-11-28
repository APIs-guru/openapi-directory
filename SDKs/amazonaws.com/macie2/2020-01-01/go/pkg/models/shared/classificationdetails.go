package shared

// ClassificationDetails
// Provides information about a sensitive data finding, including the classification job that produced the finding.
type ClassificationDetails struct {
	DetailedResultsLocation *string               `json:"detailedResultsLocation,omitempty"`
	JobArn                  *string               `json:"jobArn,omitempty"`
	JobID                   *string               `json:"jobId,omitempty"`
	Result                  *ClassificationResult `json:"result,omitempty"`
}
