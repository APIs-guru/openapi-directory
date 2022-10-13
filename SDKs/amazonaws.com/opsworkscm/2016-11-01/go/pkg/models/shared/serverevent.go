package shared

import (
	"time"
)

type ServerEvent struct {
	CreatedAt  *time.Time `json:"CreatedAt"`
	LogURL     *string    `json:"LogUrl"`
	Message    *string    `json:"Message"`
	ServerName *string    `json:"ServerName"`
}
