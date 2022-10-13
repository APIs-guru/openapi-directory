package shared

import (
	"time"
)

type SimulationJobSummary struct {
	Arn                        *string                  `json:"arn"`
	DataSourceNames            []string                 `json:"dataSourceNames"`
	LastUpdatedAt              *time.Time               `json:"lastUpdatedAt"`
	Name                       *string                  `json:"name"`
	RobotApplicationNames      []string                 `json:"robotApplicationNames"`
	SimulationApplicationNames []string                 `json:"simulationApplicationNames"`
	Status                     *SimulationJobStatusEnum `json:"status"`
}
