package shared

import (
	"time"
)

type CreateFleetResponse struct {
	Arn       *string           `json:"arn"`
	CreatedAt *time.Time        `json:"createdAt"`
	Name      *string           `json:"name"`
	Tags      map[string]string `json:"tags"`
}
