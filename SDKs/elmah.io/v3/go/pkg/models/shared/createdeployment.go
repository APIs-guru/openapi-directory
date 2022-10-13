package shared

import (
	"time"
)

type CreateDeployment struct {
	Created     *time.Time `json:"created"`
	Description *string    `json:"description"`
	LogID       *string    `json:"logId"`
	UserEmail   *string    `json:"userEmail"`
	UserName    *string    `json:"userName"`
	Version     string     `json:"version"`
}
