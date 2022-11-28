package shared

import (
	"time"
)

// ContactList
// A list that contains contacts that have subscribed to a particular topic or topics.
type ContactList struct {
	ContactListName      *string    `json:"ContactListName,omitempty"`
	LastUpdatedTimestamp *time.Time `json:"LastUpdatedTimestamp,omitempty"`
}
