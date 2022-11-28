package shared

import (
	"time"
)

// QualificationType
//
//	The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.
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
