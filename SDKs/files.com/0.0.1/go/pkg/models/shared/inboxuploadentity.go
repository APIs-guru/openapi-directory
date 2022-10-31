package shared

import (
"time")

type InboxUploadEntity struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    InboxRegistration *InboxRegistrationEntity `json:"inbox_registration,omitempty"`
    Path *string `json:"path,omitempty"`
    
}

