package shared

import (
	"time"
)

type VersionMetaData struct {
	CreatedBy   string             `json:"createdBy"`
	CreatedOn   time.Time          `json:"createdOn"`
	Description *string            `json:"description"`
	GlobalID    int64              `json:"globalId"`
	ID          string             `json:"id"`
	Labels      []string           `json:"labels"`
	Name        *string            `json:"name"`
	Properties  map[string]string  `json:"properties"`
	State       *ArtifactStateEnum `json:"state"`
	Type        ArtifactTypeEnum   `json:"type"`
	Version     int64              `json:"version"`
}
