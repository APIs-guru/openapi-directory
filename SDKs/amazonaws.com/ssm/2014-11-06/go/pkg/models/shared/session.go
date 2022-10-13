package shared

import (
	"time"
)

type Session struct {
	Details      *string                  `json:"Details"`
	DocumentName *string                  `json:"DocumentName"`
	EndDate      *time.Time               `json:"EndDate"`
	OutputURL    *SessionManagerOutputURL `json:"OutputUrl"`
	Owner        *string                  `json:"Owner"`
	SessionID    *string                  `json:"SessionId"`
	StartDate    *time.Time               `json:"StartDate"`
	Status       *SessionStatusEnum       `json:"Status"`
	Target       *string                  `json:"Target"`
}
