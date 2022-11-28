package shared

import (
	"time"
)

// Contact
// A contact is the end-user who is receiving the email.
type Contact struct {
	EmailAddress            *string           `json:"EmailAddress,omitempty"`
	LastUpdatedTimestamp    *time.Time        `json:"LastUpdatedTimestamp,omitempty"`
	TopicDefaultPreferences []TopicPreference `json:"TopicDefaultPreferences,omitempty"`
	TopicPreferences        []TopicPreference `json:"TopicPreferences,omitempty"`
	UnsubscribeAll          *bool             `json:"UnsubscribeAll,omitempty"`
}
