package shared

type DataClassificationDetails struct {
	DetailedResultsLocation *string               `json:"DetailedResultsLocation,omitempty"`
	Result                  *ClassificationResult `json:"Result,omitempty"`
}
