package shared

// BatchGetRecordError
// The error that has occurred when attempting to retrieve a batch of Records.
type BatchGetRecordError struct {
	ErrorCode                     string `json:"ErrorCode"`
	ErrorMessage                  string `json:"ErrorMessage"`
	FeatureGroupName              string `json:"FeatureGroupName"`
	RecordIdentifierValueAsString string `json:"RecordIdentifierValueAsString"`
}
