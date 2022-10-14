package shared

import (
	"time"
)

type DescribeStatementResponse struct {
	ClusterIdentifier *string            `json:"ClusterIdentifier,omitempty"`
	CreatedAt         *time.Time         `json:"CreatedAt,omitempty"`
	Database          *string            `json:"Database,omitempty"`
	DbUser            *string            `json:"DbUser,omitempty"`
	Duration          *int64             `json:"Duration,omitempty"`
	Error             *string            `json:"Error,omitempty"`
	HasResultSet      *bool              `json:"HasResultSet,omitempty"`
	ID                string             `json:"Id"`
	QueryParameters   []SQLParameter     `json:"QueryParameters,omitempty"`
	QueryString       *string            `json:"QueryString,omitempty"`
	RedshiftPid       *int64             `json:"RedshiftPid,omitempty"`
	RedshiftQueryID   *int64             `json:"RedshiftQueryId,omitempty"`
	ResultRows        *int64             `json:"ResultRows,omitempty"`
	ResultSize        *int64             `json:"ResultSize,omitempty"`
	SecretArn         *string            `json:"SecretArn,omitempty"`
	Status            *StatusStringEnum  `json:"Status,omitempty"`
	SubStatements     []SubStatementData `json:"SubStatements,omitempty"`
	UpdatedAt         *time.Time         `json:"UpdatedAt,omitempty"`
}
