package shared

import (
	"time"
)

type DeleteSecretResponse struct {
	Arn          *string    `json:"ARN,omitempty"`
	DeletionDate *time.Time `json:"DeletionDate,omitempty"`
	Name         *string    `json:"Name,omitempty"`
}
