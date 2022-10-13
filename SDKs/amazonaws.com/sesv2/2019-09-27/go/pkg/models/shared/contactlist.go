package shared

import (
	"time"
)

type ContactList struct {
	ContactListName      *string    `json:"ContactListName"`
	LastUpdatedTimestamp *time.Time `json:"LastUpdatedTimestamp"`
}
