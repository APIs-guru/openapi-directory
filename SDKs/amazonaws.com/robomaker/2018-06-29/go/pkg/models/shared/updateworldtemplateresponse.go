package shared

import (
	"time"
)

type UpdateWorldTemplateResponse struct {
	Arn           *string    `json:"arn"`
	CreatedAt     *time.Time `json:"createdAt"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt"`
	Name          *string    `json:"name"`
}
