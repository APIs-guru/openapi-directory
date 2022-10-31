package shared

type BatchGetRecordResultDetail struct {
	FeatureGroupName              string         `json:"FeatureGroupName"`
	Record                        []FeatureValue `json:"Record"`
	RecordIdentifierValueAsString string         `json:"RecordIdentifierValueAsString"`
}
