package shared

import (
	"time"
)

type SearchedVersion struct {
	CreatedBy   string            `json:"createdBy"`
	CreatedOn   time.Time         `json:"createdOn"`
	Description *string           `json:"description"`
	GlobalID    int64             `json:"globalId"`
	Labels      []string          `json:"labels"`
	Name        *string           `json:"name"`
	State       ArtifactStateEnum `json:"state"`
	Type        ArtifactTypeEnum  `json:"type"`
	Version     int32             `json:"version"`
}
