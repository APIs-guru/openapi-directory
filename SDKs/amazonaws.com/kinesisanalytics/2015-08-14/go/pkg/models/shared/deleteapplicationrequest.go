package shared

import (
	"time"
)

// DeleteApplicationRequest
// <p/>
type DeleteApplicationRequest struct {
	ApplicationName string    `json:"ApplicationName"`
	CreateTimestamp time.Time `json:"CreateTimestamp"`
}
