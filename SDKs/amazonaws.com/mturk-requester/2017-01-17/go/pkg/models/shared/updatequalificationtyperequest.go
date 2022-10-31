package shared



type UpdateQualificationTypeRequest struct {
    AnswerKey *string `json:"AnswerKey,omitempty"`
    AutoGranted *bool `json:"AutoGranted,omitempty"`
    AutoGrantedValue *int64 `json:"AutoGrantedValue,omitempty"`
    Description *string `json:"Description,omitempty"`
    QualificationTypeID string `json:"QualificationTypeId"`
    QualificationTypeStatus *QualificationTypeStatusEnum `json:"QualificationTypeStatus,omitempty"`
    RetryDelayInSeconds *int64 `json:"RetryDelayInSeconds,omitempty"`
    Test *string `json:"Test,omitempty"`
    TestDurationInSeconds *int64 `json:"TestDurationInSeconds,omitempty"`
    
}

