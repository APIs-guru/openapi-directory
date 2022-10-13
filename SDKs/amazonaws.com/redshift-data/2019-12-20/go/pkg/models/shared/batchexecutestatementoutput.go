package shared

import (
	"time"
)

type BatchExecuteStatementOutput struct {
	ClusterIdentifier *string    `json:"ClusterIdentifier"`
	CreatedAt         *time.Time `json:"CreatedAt"`
	Database          *string    `json:"Database"`
	DbUser            *string    `json:"DbUser"`
	ID                *string    `json:"Id"`
	SecretArn         *string    `json:"SecretArn"`
}
