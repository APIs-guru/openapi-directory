package shared

import (
	"time"
)

type DeleteApplicationRequest struct {
	ApplicationName string    `json:"ApplicationName"`
	CreateTimestamp time.Time `json:"CreateTimestamp"`
}
