package shared

import (
	"time"
)

type StatementData struct {
	CreatedAt        *time.Time        `json:"CreatedAt"`
	ID               string            `json:"Id"`
	IsBatchStatement *bool             `json:"IsBatchStatement"`
	QueryParameters  []SQLParameter    `json:"QueryParameters"`
	QueryString      *string           `json:"QueryString"`
	QueryStrings     []string          `json:"QueryStrings"`
	SecretArn        *string           `json:"SecretArn"`
	StatementName    *string           `json:"StatementName"`
	Status           *StatusStringEnum `json:"Status"`
	UpdatedAt        *time.Time        `json:"UpdatedAt"`
}
