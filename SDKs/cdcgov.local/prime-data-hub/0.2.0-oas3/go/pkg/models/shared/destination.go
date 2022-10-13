package shared

import (
	"time"
)

type Destination struct {
	ItemCount      *int64     `json:"itemCount"`
	Organization   *string    `json:"organization"`
	OrganizationID *string    `json:"organization_id"`
	SendingAt      *time.Time `json:"sending_at"`
	Service        *string    `json:"service"`
}
