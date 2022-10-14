package shared

import (
	"time"
)

type QualificationType struct {
	AnswerKey               *string                      `json:"AnswerKey,omitempty"`
	AutoGranted             *bool                        `json:"AutoGranted,omitempty"`
	AutoGrantedValue        *int64                       `json:"AutoGrantedValue,omitempty"`
	CreationTime            *time.Time                   `json:"CreationTime,omitempty"`
	Description             *string                      `json:"Description,omitempty"`
	IsRequestable           *bool                        `json:"IsRequestable,omitempty"`
	Keywords                *string                      `json:"Keywords,omitempty"`
	Name                    *string                      `json:"Name,omitempty"`
	QualificationTypeID     *string                      `json:"QualificationTypeId,omitempty"`
	QualificationTypeStatus *QualificationTypeStatusEnum `json:"QualificationTypeStatus,omitempty"`
	RetryDelayInSeconds     *int64                       `json:"RetryDelayInSeconds,omitempty"`
	Test                    *string                      `json:"Test,omitempty"`
	TestDurationInSeconds   *int64                       `json:"TestDurationInSeconds,omitempty"`
}
