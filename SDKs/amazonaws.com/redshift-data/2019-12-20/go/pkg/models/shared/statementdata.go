package shared

import (
	"time"
)

// StatementData
// The SQL statement to run.
type StatementData struct {
	CreatedAt        *time.Time        `json:"CreatedAt,omitempty"`
	ID               string            `json:"Id"`
	IsBatchStatement *bool             `json:"IsBatchStatement,omitempty"`
	QueryParameters  []SQLParameter    `json:"QueryParameters,omitempty"`
	QueryString      *string           `json:"QueryString,omitempty"`
	QueryStrings     []string          `json:"QueryStrings,omitempty"`
	SecretArn        *string           `json:"SecretArn,omitempty"`
	StatementName    *string           `json:"StatementName,omitempty"`
	Status           *StatusStringEnum `json:"Status,omitempty"`
	UpdatedAt        *time.Time        `json:"UpdatedAt,omitempty"`
}
