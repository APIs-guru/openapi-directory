package shared

import (
	"time"
)

type Qualification struct {
	GrantTime           *time.Time               `json:"GrantTime"`
	IntegerValue        *int64                   `json:"IntegerValue"`
	LocaleValue         *Locale                  `json:"LocaleValue"`
	QualificationTypeID *string                  `json:"QualificationTypeId"`
	Status              *QualificationStatusEnum `json:"Status"`
	WorkerID            *string                  `json:"WorkerId"`
}
