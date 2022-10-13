package shared

import (
	"time"
)

type Environment struct {
	AirflowConfigurationOptions  map[string]string        `json:"AirflowConfigurationOptions"`
	AirflowVersion               *string                  `json:"AirflowVersion"`
	Arn                          *string                  `json:"Arn"`
	CreatedAt                    *time.Time               `json:"CreatedAt"`
	DagS3Path                    *string                  `json:"DagS3Path"`
	EnvironmentClass             *string                  `json:"EnvironmentClass"`
	ExecutionRoleArn             *string                  `json:"ExecutionRoleArn"`
	KmsKey                       *string                  `json:"KmsKey"`
	LastUpdate                   *LastUpdate              `json:"LastUpdate"`
	LoggingConfiguration         *LoggingConfiguration    `json:"LoggingConfiguration"`
	MaxWorkers                   *int64                   `json:"MaxWorkers"`
	MinWorkers                   *int64                   `json:"MinWorkers"`
	Name                         *string                  `json:"Name"`
	NetworkConfiguration         *NetworkConfiguration    `json:"NetworkConfiguration"`
	PluginsS3ObjectVersion       *string                  `json:"PluginsS3ObjectVersion"`
	PluginsS3Path                *string                  `json:"PluginsS3Path"`
	RequirementsS3ObjectVersion  *string                  `json:"RequirementsS3ObjectVersion"`
	RequirementsS3Path           *string                  `json:"RequirementsS3Path"`
	Schedulers                   *int64                   `json:"Schedulers"`
	ServiceRoleArn               *string                  `json:"ServiceRoleArn"`
	SourceBucketArn              *string                  `json:"SourceBucketArn"`
	Status                       *EnvironmentStatusEnum   `json:"Status"`
	Tags                         map[string]string        `json:"Tags"`
	WebserverAccessMode          *WebserverAccessModeEnum `json:"WebserverAccessMode"`
	WebserverURL                 *string                  `json:"WebserverUrl"`
	WeeklyMaintenanceWindowStart *string                  `json:"WeeklyMaintenanceWindowStart"`
}
