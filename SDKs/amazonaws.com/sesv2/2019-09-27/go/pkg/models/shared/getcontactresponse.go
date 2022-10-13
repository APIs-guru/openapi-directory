package shared

import (
	"time"
)

type GetContactResponse struct {
	AttributesData          *string           `json:"AttributesData"`
	ContactListName         *string           `json:"ContactListName"`
	CreatedTimestamp        *time.Time        `json:"CreatedTimestamp"`
	EmailAddress            *string           `json:"EmailAddress"`
	LastUpdatedTimestamp    *time.Time        `json:"LastUpdatedTimestamp"`
	TopicDefaultPreferences []TopicPreference `json:"TopicDefaultPreferences"`
	TopicPreferences        []TopicPreference `json:"TopicPreferences"`
	UnsubscribeAll          *bool             `json:"UnsubscribeAll"`
}
