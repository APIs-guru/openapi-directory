package shared



type ClassificationDetails struct {
    DetailedResultsLocation *string `json:"detailedResultsLocation,omitempty"`
    JobArn *string `json:"jobArn,omitempty"`
    JobID *string `json:"jobId,omitempty"`
    Result *ClassificationResult `json:"result,omitempty"`
    
}

