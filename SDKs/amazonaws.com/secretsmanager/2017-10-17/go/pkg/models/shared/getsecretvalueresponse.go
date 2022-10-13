package shared

import (
	"time"
)

type GetSecretValueResponse struct {
	Arn           *string    `json:"ARN"`
	CreatedDate   *time.Time `json:"CreatedDate"`
	Name          *string    `json:"Name"`
	SecretBinary  *string    `json:"SecretBinary"`
	SecretString  *string    `json:"SecretString"`
	VersionID     *string    `json:"VersionId"`
	VersionStages []string   `json:"VersionStages"`
}
