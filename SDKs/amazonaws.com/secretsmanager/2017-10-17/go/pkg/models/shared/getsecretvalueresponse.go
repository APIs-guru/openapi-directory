package shared

import (
	"time"
)

type GetSecretValueResponse struct {
	Arn           *string    `json:"ARN,omitempty"`
	CreatedDate   *time.Time `json:"CreatedDate,omitempty"`
	Name          *string    `json:"Name,omitempty"`
	SecretBinary  *string    `json:"SecretBinary,omitempty"`
	SecretString  *string    `json:"SecretString,omitempty"`
	VersionID     *string    `json:"VersionId,omitempty"`
	VersionStages []string   `json:"VersionStages,omitempty"`
}
