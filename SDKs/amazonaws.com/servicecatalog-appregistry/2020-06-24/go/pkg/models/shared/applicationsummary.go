package shared

import (
	"time"
)

type ApplicationSummary struct {
	Arn            *string    `json:"arn"`
	CreationTime   *time.Time `json:"creationTime"`
	Description    *string    `json:"description"`
	ID             *string    `json:"id"`
	LastUpdateTime *time.Time `json:"lastUpdateTime"`
	Name           *string    `json:"name"`
}
