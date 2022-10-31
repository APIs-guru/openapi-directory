package shared

import (
	"time"
)

type ContactList struct {
	ContactListName      *string    `json:"ContactListName,omitempty"`
	LastUpdatedTimestamp *time.Time `json:"LastUpdatedTimestamp,omitempty"`
}
