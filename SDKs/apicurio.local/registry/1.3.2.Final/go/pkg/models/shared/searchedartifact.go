package shared

import (
	"time"
)

type SearchedArtifact struct {
	CreatedBy   string            `json:"createdBy"`
	CreatedOn   time.Time         `json:"createdOn"`
	Description *string           `json:"description"`
	ID          string            `json:"id"`
	Labels      []string          `json:"labels"`
	ModifiedBy  *string           `json:"modifiedBy"`
	ModifiedOn  *time.Time        `json:"modifiedOn"`
	Name        *string           `json:"name"`
	State       ArtifactStateEnum `json:"state"`
	Type        ArtifactTypeEnum  `json:"type"`
}
