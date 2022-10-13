package shared

import (
	"time"
)

type DescribeStatementResponse struct {
	ClusterIdentifier *string            `json:"ClusterIdentifier"`
	CreatedAt         *time.Time         `json:"CreatedAt"`
	Database          *string            `json:"Database"`
	DbUser            *string            `json:"DbUser"`
	Duration          *int64             `json:"Duration"`
	Error             *string            `json:"Error"`
	HasResultSet      *bool              `json:"HasResultSet"`
	ID                string             `json:"Id"`
	QueryParameters   []SQLParameter     `json:"QueryParameters"`
	QueryString       *string            `json:"QueryString"`
	RedshiftPid       *int64             `json:"RedshiftPid"`
	RedshiftQueryID   *int64             `json:"RedshiftQueryId"`
	ResultRows        *int64             `json:"ResultRows"`
	ResultSize        *int64             `json:"ResultSize"`
	SecretArn         *string            `json:"SecretArn"`
	Status            *StatusStringEnum  `json:"Status"`
	SubStatements     []SubStatementData `json:"SubStatements"`
	UpdatedAt         *time.Time         `json:"UpdatedAt"`
}
