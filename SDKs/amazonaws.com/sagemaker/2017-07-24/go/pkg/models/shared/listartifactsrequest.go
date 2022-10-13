package shared

import (
	"time"
)

type ListArtifactsRequest struct {
	ArtifactType  *string              `json:"ArtifactType"`
	CreatedAfter  *time.Time           `json:"CreatedAfter"`
	CreatedBefore *time.Time           `json:"CreatedBefore"`
	MaxResults    *int64               `json:"MaxResults"`
	NextToken     *string              `json:"NextToken"`
	SortBy        *SortArtifactsByEnum `json:"SortBy"`
	SortOrder     *SortOrderEnum       `json:"SortOrder"`
	SourceURI     *string              `json:"SourceUri"`
}
