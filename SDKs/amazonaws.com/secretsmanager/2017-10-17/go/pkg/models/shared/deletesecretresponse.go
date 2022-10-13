package shared

import (
	"time"
)

type DeleteSecretResponse struct {
	Arn          *string    `json:"ARN"`
	DeletionDate *time.Time `json:"DeletionDate"`
	Name         *string    `json:"Name"`
}
