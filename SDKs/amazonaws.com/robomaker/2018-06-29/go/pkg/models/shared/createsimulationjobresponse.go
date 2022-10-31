package shared

import (
	"time"
)

type CreateSimulationJobResponse struct {
	Arn                     *string                       `json:"arn,omitempty"`
	ClientRequestToken      *string                       `json:"clientRequestToken,omitempty"`
	Compute                 *ComputeResponse              `json:"compute,omitempty"`
	DataSources             []DataSource                  `json:"dataSources,omitempty"`
	FailureBehavior         *FailureBehaviorEnum          `json:"failureBehavior,omitempty"`
	FailureCode             *SimulationJobErrorCodeEnum   `json:"failureCode,omitempty"`
	IamRole                 *string                       `json:"iamRole,omitempty"`
	LastStartedAt           *time.Time                    `json:"lastStartedAt,omitempty"`
	LastUpdatedAt           *time.Time                    `json:"lastUpdatedAt,omitempty"`
	LoggingConfig           *LoggingConfig                `json:"loggingConfig,omitempty"`
	MaxJobDurationInSeconds *int64                        `json:"maxJobDurationInSeconds,omitempty"`
	OutputLocation          *OutputLocation               `json:"outputLocation,omitempty"`
	RobotApplications       []RobotApplicationConfig      `json:"robotApplications,omitempty"`
	SimulationApplications  []SimulationApplicationConfig `json:"simulationApplications,omitempty"`
	SimulationTimeMillis    *int64                        `json:"simulationTimeMillis,omitempty"`
	Status                  *SimulationJobStatusEnum      `json:"status,omitempty"`
	Tags                    map[string]string             `json:"tags,omitempty"`
	VpcConfig               *VpcConfigResponse            `json:"vpcConfig,omitempty"`
}
