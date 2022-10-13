package shared

type DataClassificationDetails struct {
	DetailedResultsLocation *string               `json:"DetailedResultsLocation"`
	Result                  *ClassificationResult `json:"Result"`
}
