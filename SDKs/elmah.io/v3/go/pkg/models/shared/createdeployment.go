package shared

import (
	"time"
)

type CreateDeployment struct {
	Created     *time.Time `json:"created,omitempty"`
	Description *string    `json:"description,omitempty"`
	LogID       *string    `json:"logId,omitempty"`
	UserEmail   *string    `json:"userEmail,omitempty"`
	UserName    *string    `json:"userName,omitempty"`
	Version     string     `json:"version"`
}
