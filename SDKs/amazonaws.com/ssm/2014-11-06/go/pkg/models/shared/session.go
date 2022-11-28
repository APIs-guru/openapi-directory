package shared

import (
	"time"
)

// Session
// Information about a Session Manager connection to an instance.
type Session struct {
	Details      *string                  `json:"Details,omitempty"`
	DocumentName *string                  `json:"DocumentName,omitempty"`
	EndDate      *time.Time               `json:"EndDate,omitempty"`
	OutputURL    *SessionManagerOutputURL `json:"OutputUrl,omitempty"`
	Owner        *string                  `json:"Owner,omitempty"`
	SessionID    *string                  `json:"SessionId,omitempty"`
	StartDate    *time.Time               `json:"StartDate,omitempty"`
	Status       *SessionStatusEnum       `json:"Status,omitempty"`
	Target       *string                  `json:"Target,omitempty"`
}
