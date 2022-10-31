package shared

import (
"time")

type CreateSimulationApplicationResponse struct {
    Arn *string `json:"arn,omitempty"`
    Environment *Environment `json:"environment,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    Name *string `json:"name,omitempty"`
    RenderingEngine *RenderingEngine `json:"renderingEngine,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    RobotSoftwareSuite *RobotSoftwareSuite `json:"robotSoftwareSuite,omitempty"`
    SimulationSoftwareSuite *SimulationSoftwareSuite `json:"simulationSoftwareSuite,omitempty"`
    Sources []Source `json:"sources,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

