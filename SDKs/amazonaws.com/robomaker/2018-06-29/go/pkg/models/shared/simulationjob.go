package shared

import (
	"time"
)

type SimulationJob struct {
	Arn                     *string                       `json:"arn"`
	ClientRequestToken      *string                       `json:"clientRequestToken"`
	Compute                 *ComputeResponse              `json:"compute"`
	DataSources             []DataSource                  `json:"dataSources"`
	FailureBehavior         *FailureBehaviorEnum          `json:"failureBehavior"`
	FailureCode             *SimulationJobErrorCodeEnum   `json:"failureCode"`
	FailureReason           *string                       `json:"failureReason"`
	IamRole                 *string                       `json:"iamRole"`
	LastStartedAt           *time.Time                    `json:"lastStartedAt"`
	LastUpdatedAt           *time.Time                    `json:"lastUpdatedAt"`
	LoggingConfig           *LoggingConfig                `json:"loggingConfig"`
	MaxJobDurationInSeconds *int64                        `json:"maxJobDurationInSeconds"`
	Name                    *string                       `json:"name"`
	NetworkInterface        *NetworkInterface             `json:"networkInterface"`
	OutputLocation          *OutputLocation               `json:"outputLocation"`
	RobotApplications       []RobotApplicationConfig      `json:"robotApplications"`
	SimulationApplications  []SimulationApplicationConfig `json:"simulationApplications"`
	SimulationTimeMillis    *int64                        `json:"simulationTimeMillis"`
	Status                  *SimulationJobStatusEnum      `json:"status"`
	Tags                    map[string]string             `json:"tags"`
	VpcConfig               *VpcConfigResponse            `json:"vpcConfig"`
}
