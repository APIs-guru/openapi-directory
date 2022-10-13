package shared

import (
	"time"
)

type DataSource struct {
	ComputeStatistics *bool             `json:"ComputeStatistics"`
	ComputeTime       *int64            `json:"ComputeTime"`
	CreatedAt         *time.Time        `json:"CreatedAt"`
	CreatedByIamUser  *string           `json:"CreatedByIamUser"`
	DataLocationS3    *string           `json:"DataLocationS3"`
	DataRearrangement *string           `json:"DataRearrangement"`
	DataSizeInBytes   *int64            `json:"DataSizeInBytes"`
	DataSourceID      *string           `json:"DataSourceId"`
	FinishedAt        *time.Time        `json:"FinishedAt"`
	LastUpdatedAt     *time.Time        `json:"LastUpdatedAt"`
	Message           *string           `json:"Message"`
	Name              *string           `json:"Name"`
	NumberOfFiles     *int64            `json:"NumberOfFiles"`
	RdsMetadata       *RdsMetadata      `json:"RDSMetadata"`
	RedshiftMetadata  *RedshiftMetadata `json:"RedshiftMetadata"`
	RoleArn           *string           `json:"RoleARN"`
	StartedAt         *time.Time        `json:"StartedAt"`
	Status            *EntityStatusEnum `json:"Status"`
}
