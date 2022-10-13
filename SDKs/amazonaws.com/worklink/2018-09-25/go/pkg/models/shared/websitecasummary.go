package shared

import (
	"time"
)

type WebsiteCaSummary struct {
	CreatedTime *time.Time `json:"CreatedTime"`
	DisplayName *string    `json:"DisplayName"`
	WebsiteCaID *string    `json:"WebsiteCaId"`
}
