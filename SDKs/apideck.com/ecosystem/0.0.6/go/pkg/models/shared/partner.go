package shared

import (
	"time"
)

type Partner struct {
	Company   string     `json:"company"`
	Contacts  []Contact  `json:"contacts"`
	CreatedAt *time.Time `json:"created_at"`
	Icon      *File      `json:"icon"`
	ID        *string    `json:"id"`
	Listed    *string    `json:"listed"`
	Twitter   *string    `json:"twitter"`
	UpdatedAt *time.Time `json:"updated_at"`
	Website   *string    `json:"website"`
}
