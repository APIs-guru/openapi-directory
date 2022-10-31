package shared

import (
	"time"
)

type GetContactResponse struct {
	AttributesData          *string           `json:"AttributesData,omitempty"`
	ContactListName         *string           `json:"ContactListName,omitempty"`
	CreatedTimestamp        *time.Time        `json:"CreatedTimestamp,omitempty"`
	EmailAddress            *string           `json:"EmailAddress,omitempty"`
	LastUpdatedTimestamp    *time.Time        `json:"LastUpdatedTimestamp,omitempty"`
	TopicDefaultPreferences []TopicPreference `json:"TopicDefaultPreferences,omitempty"`
	TopicPreferences        []TopicPreference `json:"TopicPreferences,omitempty"`
	UnsubscribeAll          *bool             `json:"UnsubscribeAll,omitempty"`
}
