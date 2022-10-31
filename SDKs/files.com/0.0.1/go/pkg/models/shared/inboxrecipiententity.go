package shared

import (
	"time"
)

type InboxRecipientEntity struct {
	Company   *string    `json:"company,omitempty"`
	Name      *string    `json:"name,omitempty"`
	Note      *string    `json:"note,omitempty"`
	Recipient *string    `json:"recipient,omitempty"`
	SentAt    *time.Time `json:"sent_at,omitempty"`
}
