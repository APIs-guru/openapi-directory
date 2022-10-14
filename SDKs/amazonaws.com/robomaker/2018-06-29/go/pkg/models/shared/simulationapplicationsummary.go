package shared

import (
	"time"
)

type SimulationApplicationSummary struct {
	Arn                     *string                  `json:"arn,omitempty"`
	LastUpdatedAt           *time.Time               `json:"lastUpdatedAt,omitempty"`
	Name                    *string                  `json:"name,omitempty"`
	RobotSoftwareSuite      *RobotSoftwareSuite      `json:"robotSoftwareSuite,omitempty"`
	SimulationSoftwareSuite *SimulationSoftwareSuite `json:"simulationSoftwareSuite,omitempty"`
	Version                 *string                  `json:"version,omitempty"`
}
