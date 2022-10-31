package shared

import (
	"time"
)

type UpdateWorldTemplateResponse struct {
	Arn           *string    `json:"arn,omitempty"`
	CreatedAt     *time.Time `json:"createdAt,omitempty"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
	Name          *string    `json:"name,omitempty"`
}
