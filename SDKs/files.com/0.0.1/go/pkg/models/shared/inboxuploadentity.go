package shared

import (
	"time"
)

type InboxUploadEntity struct {
	CreatedAt         *time.Time               `json:"created_at"`
	InboxRegistration *InboxRegistrationEntity `json:"inbox_registration"`
	Path              *string                  `json:"path"`
}
