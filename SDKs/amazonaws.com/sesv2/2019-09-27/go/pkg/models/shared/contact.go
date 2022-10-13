package shared

import (
	"time"
)

type Contact struct {
	EmailAddress            *string           `json:"EmailAddress"`
	LastUpdatedTimestamp    *time.Time        `json:"LastUpdatedTimestamp"`
	TopicDefaultPreferences []TopicPreference `json:"TopicDefaultPreferences"`
	TopicPreferences        []TopicPreference `json:"TopicPreferences"`
	UnsubscribeAll          *bool             `json:"UnsubscribeAll"`
}
