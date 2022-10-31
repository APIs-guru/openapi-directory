package shared

import (
	"time"
)

type WorkTypeDetailsAPIModel struct {
	CreatedOn *time.Time `json:"CreatedOn,omitempty"`
	ID        *int32     `json:"Id,omitempty"`
	Title     *string    `json:"Title,omitempty"`
}
