package shared

// BatchGetRecordResultDetail
// The output of Records that have been retrieved in a batch.
type BatchGetRecordResultDetail struct {
	FeatureGroupName              string         `json:"FeatureGroupName"`
	Record                        []FeatureValue `json:"Record"`
	RecordIdentifierValueAsString string         `json:"RecordIdentifierValueAsString"`
}
