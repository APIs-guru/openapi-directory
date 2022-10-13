package shared

import (
	"time"
)

type Breadcrumb struct {
	Action   *string    `json:"action"`
	DateTime *time.Time `json:"dateTime"`
	Message  *string    `json:"message"`
	Severity *string    `json:"severity"`
}
