package shared

import (
	"time"
)

// InboxUploadEntity
// List Inbox Uploads
type InboxUploadEntity struct {
	CreatedAt         *time.Time               `json:"created_at,omitempty"`
	InboxRegistration *InboxRegistrationEntity `json:"inbox_registration,omitempty"`
	Path              *string                  `json:"path,omitempty"`
}
