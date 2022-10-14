package shared

import (
	"time"
)

type Environment struct {
	AirflowConfigurationOptions  map[string]string        `json:"AirflowConfigurationOptions,omitempty"`
	AirflowVersion               *string                  `json:"AirflowVersion,omitempty"`
	Arn                          *string                  `json:"Arn,omitempty"`
	CreatedAt                    *time.Time               `json:"CreatedAt,omitempty"`
	DagS3Path                    *string                  `json:"DagS3Path,omitempty"`
	EnvironmentClass             *string                  `json:"EnvironmentClass,omitempty"`
	ExecutionRoleArn             *string                  `json:"ExecutionRoleArn,omitempty"`
	KmsKey                       *string                  `json:"KmsKey,omitempty"`
	LastUpdate                   *LastUpdate              `json:"LastUpdate,omitempty"`
	LoggingConfiguration         *LoggingConfiguration    `json:"LoggingConfiguration,omitempty"`
	MaxWorkers                   *int64                   `json:"MaxWorkers,omitempty"`
	MinWorkers                   *int64                   `json:"MinWorkers,omitempty"`
	Name                         *string                  `json:"Name,omitempty"`
	NetworkConfiguration         *NetworkConfiguration    `json:"NetworkConfiguration,omitempty"`
	PluginsS3ObjectVersion       *string                  `json:"PluginsS3ObjectVersion,omitempty"`
	PluginsS3Path                *string                  `json:"PluginsS3Path,omitempty"`
	RequirementsS3ObjectVersion  *string                  `json:"RequirementsS3ObjectVersion,omitempty"`
	RequirementsS3Path           *string                  `json:"RequirementsS3Path,omitempty"`
	Schedulers                   *int64                   `json:"Schedulers,omitempty"`
	ServiceRoleArn               *string                  `json:"ServiceRoleArn,omitempty"`
	SourceBucketArn              *string                  `json:"SourceBucketArn,omitempty"`
	Status                       *EnvironmentStatusEnum   `json:"Status,omitempty"`
	Tags                         map[string]string        `json:"Tags,omitempty"`
	WebserverAccessMode          *WebserverAccessModeEnum `json:"WebserverAccessMode,omitempty"`
	WebserverURL                 *string                  `json:"WebserverUrl,omitempty"`
	WeeklyMaintenanceWindowStart *string                  `json:"WeeklyMaintenanceWindowStart,omitempty"`
}
