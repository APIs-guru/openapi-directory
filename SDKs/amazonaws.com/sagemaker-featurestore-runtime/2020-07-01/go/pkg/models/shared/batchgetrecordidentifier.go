package shared

type BatchGetRecordIdentifier struct {
	FeatureGroupName               string   `json:"FeatureGroupName"`
	FeatureNames                   []string `json:"FeatureNames"`
	RecordIdentifiersValueAsString []string `json:"RecordIdentifiersValueAsString"`
}
