package shared

import (
	"time"
)

type Deployment struct {
	Created     *time.Time `json:"created"`
	CreatedBy   *string    `json:"createdBy"`
	Description *string    `json:"description"`
	ID          *string    `json:"id"`
	LogID       *string    `json:"logId"`
	UserEmail   *string    `json:"userEmail"`
	UserName    *string    `json:"userName"`
	Version     *string    `json:"version"`
}
