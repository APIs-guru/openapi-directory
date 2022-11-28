package shared

import (
	"time"
)

// Qualification
// The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
type Qualification struct {
	GrantTime           *time.Time               `json:"GrantTime,omitempty"`
	IntegerValue        *int64                   `json:"IntegerValue,omitempty"`
	LocaleValue         *Locale                  `json:"LocaleValue,omitempty"`
	QualificationTypeID *string                  `json:"QualificationTypeId,omitempty"`
	Status              *QualificationStatusEnum `json:"Status,omitempty"`
	WorkerID            *string                  `json:"WorkerId,omitempty"`
}
