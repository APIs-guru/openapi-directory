package shared

import (
	"time"
)

type InboxRecipientEntity struct {
	Company   *string    `json:"company"`
	Name      *string    `json:"name"`
	Note      *string    `json:"note"`
	Recipient *string    `json:"recipient"`
	SentAt    *time.Time `json:"sent_at"`
}
