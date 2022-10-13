package shared

import (
	"time"
)

type ListAssociationsRequest struct {
	AssociationType *AssociationEdgeTypeEnum `json:"AssociationType"`
	CreatedAfter    *time.Time               `json:"CreatedAfter"`
	CreatedBefore   *time.Time               `json:"CreatedBefore"`
	DestinationArn  *string                  `json:"DestinationArn"`
	DestinationType *string                  `json:"DestinationType"`
	MaxResults      *int64                   `json:"MaxResults"`
	NextToken       *string                  `json:"NextToken"`
	SortBy          *SortAssociationsByEnum  `json:"SortBy"`
	SortOrder       *SortOrderEnum           `json:"SortOrder"`
	SourceArn       *string                  `json:"SourceArn"`
	SourceType      *string                  `json:"SourceType"`
}
