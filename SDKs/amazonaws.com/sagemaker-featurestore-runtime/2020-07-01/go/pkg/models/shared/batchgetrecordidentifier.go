package shared

type BatchGetRecordIdentifier struct {
	FeatureGroupName               string   `json:"FeatureGroupName"`
	FeatureNames                   []string `json:"FeatureNames,omitempty"`
	RecordIdentifiersValueAsString []string `json:"RecordIdentifiersValueAsString"`
}
