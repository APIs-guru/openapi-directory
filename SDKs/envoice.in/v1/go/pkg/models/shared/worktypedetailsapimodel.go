package shared

import (
	"time"
)

type WorkTypeDetailsAPIModel struct {
	CreatedOn *time.Time `json:"CreatedOn"`
	ID        *int32     `json:"Id"`
	Title     *string    `json:"Title"`
}
