package shared

// BatchGetRecordIdentifier
// The identifier that identifies the batch of Records you are retrieving in a batch.
type BatchGetRecordIdentifier struct {
	FeatureGroupName               string   `json:"FeatureGroupName"`
	FeatureNames                   []string `json:"FeatureNames,omitempty"`
	RecordIdentifiersValueAsString []string `json:"RecordIdentifiersValueAsString"`
}
