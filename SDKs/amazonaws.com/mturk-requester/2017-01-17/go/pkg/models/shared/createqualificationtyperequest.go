package shared



type CreateQualificationTypeRequest struct {
    AnswerKey *string `json:"AnswerKey,omitempty"`
    AutoGranted *bool `json:"AutoGranted,omitempty"`
    AutoGrantedValue *int64 `json:"AutoGrantedValue,omitempty"`
    Description string `json:"Description"`
    Keywords *string `json:"Keywords,omitempty"`
    Name string `json:"Name"`
    QualificationTypeStatus QualificationTypeStatusEnum `json:"QualificationTypeStatus"`
    RetryDelayInSeconds *int64 `json:"RetryDelayInSeconds,omitempty"`
    Test *string `json:"Test,omitempty"`
    TestDurationInSeconds *int64 `json:"TestDurationInSeconds,omitempty"`
    
}

