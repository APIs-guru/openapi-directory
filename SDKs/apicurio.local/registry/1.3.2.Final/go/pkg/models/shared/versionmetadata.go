package shared

import (
	"time"
)

type VersionMetaData struct {
	CreatedBy   string             `json:"createdBy"`
	CreatedOn   time.Time          `json:"createdOn"`
	Description *string            `json:"description,omitempty"`
	GlobalID    int64              `json:"globalId"`
	ID          string             `json:"id"`
	Labels      []string           `json:"labels,omitempty"`
	Name        *string            `json:"name,omitempty"`
	Properties  map[string]string  `json:"properties,omitempty"`
	State       *ArtifactStateEnum `json:"state,omitempty"`
	Type        ArtifactTypeEnum   `json:"type"`
	Version     int64              `json:"version"`
}
