package shared

import (
	"time"
)

// DataSource
// <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
type DataSource struct {
	ComputeStatistics *bool             `json:"ComputeStatistics,omitempty"`
	ComputeTime       *int64            `json:"ComputeTime,omitempty"`
	CreatedAt         *time.Time        `json:"CreatedAt,omitempty"`
	CreatedByIamUser  *string           `json:"CreatedByIamUser,omitempty"`
	DataLocationS3    *string           `json:"DataLocationS3,omitempty"`
	DataRearrangement *string           `json:"DataRearrangement,omitempty"`
	DataSizeInBytes   *int64            `json:"DataSizeInBytes,omitempty"`
	DataSourceID      *string           `json:"DataSourceId,omitempty"`
	FinishedAt        *time.Time        `json:"FinishedAt,omitempty"`
	LastUpdatedAt     *time.Time        `json:"LastUpdatedAt,omitempty"`
	Message           *string           `json:"Message,omitempty"`
	Name              *string           `json:"Name,omitempty"`
	NumberOfFiles     *int64            `json:"NumberOfFiles,omitempty"`
	RdsMetadata       *RdsMetadata      `json:"RDSMetadata,omitempty"`
	RedshiftMetadata  *RedshiftMetadata `json:"RedshiftMetadata,omitempty"`
	RoleArn           *string           `json:"RoleARN,omitempty"`
	StartedAt         *time.Time        `json:"StartedAt,omitempty"`
	Status            *EntityStatusEnum `json:"Status,omitempty"`
}
