package shared



type BatchGetRecordError struct {
    ErrorCode string `json:"ErrorCode"`
    ErrorMessage string `json:"ErrorMessage"`
    FeatureGroupName string `json:"FeatureGroupName"`
    RecordIdentifierValueAsString string `json:"RecordIdentifierValueAsString"`
    
}

