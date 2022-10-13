package shared

type UpdateQualificationTypeRequest struct {
	AnswerKey               *string                      `json:"AnswerKey"`
	AutoGranted             *bool                        `json:"AutoGranted"`
	AutoGrantedValue        *int64                       `json:"AutoGrantedValue"`
	Description             *string                      `json:"Description"`
	QualificationTypeID     string                       `json:"QualificationTypeId"`
	QualificationTypeStatus *QualificationTypeStatusEnum `json:"QualificationTypeStatus"`
	RetryDelayInSeconds     *int64                       `json:"RetryDelayInSeconds"`
	Test                    *string                      `json:"Test"`
	TestDurationInSeconds   *int64                       `json:"TestDurationInSeconds"`
}
