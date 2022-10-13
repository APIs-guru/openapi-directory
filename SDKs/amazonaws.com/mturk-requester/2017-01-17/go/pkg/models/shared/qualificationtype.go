package shared

import (
	"time"
)

type QualificationType struct {
	AnswerKey               *string                      `json:"AnswerKey"`
	AutoGranted             *bool                        `json:"AutoGranted"`
	AutoGrantedValue        *int64                       `json:"AutoGrantedValue"`
	CreationTime            *time.Time                   `json:"CreationTime"`
	Description             *string                      `json:"Description"`
	IsRequestable           *bool                        `json:"IsRequestable"`
	Keywords                *string                      `json:"Keywords"`
	Name                    *string                      `json:"Name"`
	QualificationTypeID     *string                      `json:"QualificationTypeId"`
	QualificationTypeStatus *QualificationTypeStatusEnum `json:"QualificationTypeStatus"`
	RetryDelayInSeconds     *int64                       `json:"RetryDelayInSeconds"`
	Test                    *string                      `json:"Test"`
	TestDurationInSeconds   *int64                       `json:"TestDurationInSeconds"`
}
