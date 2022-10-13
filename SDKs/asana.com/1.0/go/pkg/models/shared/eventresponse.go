package shared

import (
	"time"
)

type EventResponseChange struct {
	Action       *string      `json:"action"`
	AddedValue   *interface{} `json:"added_value"`
	Field        *string      `json:"field"`
	NewValue     *interface{} `json:"new_value"`
	RemovedValue *interface{} `json:"removed_value"`
}

type EventResponse struct {
	Action    *string              `json:"action"`
	Change    *EventResponseChange `json:"change"`
	CreatedAt *time.Time           `json:"created_at"`
	Parent    *AsanaNamedResource  `json:"parent"`
	Resource  *AsanaNamedResource  `json:"resource"`
	Type      *string              `json:"type"`
	User      *UserCompact         `json:"user"`
}
