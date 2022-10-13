package shared

import (
	"time"
)

type UpdateSimulationApplicationResponse struct {
	Arn                     *string                  `json:"arn"`
	Environment             *Environment             `json:"environment"`
	LastUpdatedAt           *time.Time               `json:"lastUpdatedAt"`
	Name                    *string                  `json:"name"`
	RenderingEngine         *RenderingEngine         `json:"renderingEngine"`
	RevisionID              *string                  `json:"revisionId"`
	RobotSoftwareSuite      *RobotSoftwareSuite      `json:"robotSoftwareSuite"`
	SimulationSoftwareSuite *SimulationSoftwareSuite `json:"simulationSoftwareSuite"`
	Sources                 []Source                 `json:"sources"`
	Version                 *string                  `json:"version"`
}
