package shared

import (
	"time"
)

type ResourceDetail struct {
	Arn         *string    `json:"ARN"`
	CreatedTime *time.Time `json:"CreatedTime"`
	Description *string    `json:"Description"`
	ID          *string    `json:"Id"`
	Name        *string    `json:"Name"`
}
