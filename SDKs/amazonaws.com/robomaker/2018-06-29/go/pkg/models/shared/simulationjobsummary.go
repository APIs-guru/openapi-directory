package shared

import (
	"time"
)

type SimulationJobSummary struct {
	Arn                        *string                  `json:"arn,omitempty"`
	DataSourceNames            []string                 `json:"dataSourceNames,omitempty"`
	LastUpdatedAt              *time.Time               `json:"lastUpdatedAt,omitempty"`
	Name                       *string                  `json:"name,omitempty"`
	RobotApplicationNames      []string                 `json:"robotApplicationNames,omitempty"`
	SimulationApplicationNames []string                 `json:"simulationApplicationNames,omitempty"`
	Status                     *SimulationJobStatusEnum `json:"status,omitempty"`
}
