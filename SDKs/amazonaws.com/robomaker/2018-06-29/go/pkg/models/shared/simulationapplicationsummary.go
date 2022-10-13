package shared

import (
	"time"
)

type SimulationApplicationSummary struct {
	Arn                     *string                  `json:"arn"`
	LastUpdatedAt           *time.Time               `json:"lastUpdatedAt"`
	Name                    *string                  `json:"name"`
	RobotSoftwareSuite      *RobotSoftwareSuite      `json:"robotSoftwareSuite"`
	SimulationSoftwareSuite *SimulationSoftwareSuite `json:"simulationSoftwareSuite"`
	Version                 *string                  `json:"version"`
}
