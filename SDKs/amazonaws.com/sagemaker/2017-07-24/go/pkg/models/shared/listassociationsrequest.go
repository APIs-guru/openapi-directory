package shared

import (
	"time"
)

type ListAssociationsRequest struct {
	AssociationType *AssociationEdgeTypeEnum `json:"AssociationType,omitempty"`
	CreatedAfter    *time.Time               `json:"CreatedAfter,omitempty"`
	CreatedBefore   *time.Time               `json:"CreatedBefore,omitempty"`
	DestinationArn  *string                  `json:"DestinationArn,omitempty"`
	DestinationType *string                  `json:"DestinationType,omitempty"`
	MaxResults      *int64                   `json:"MaxResults,omitempty"`
	NextToken       *string                  `json:"NextToken,omitempty"`
	SortBy          *SortAssociationsByEnum  `json:"SortBy,omitempty"`
	SortOrder       *SortOrderEnum           `json:"SortOrder,omitempty"`
	SourceArn       *string                  `json:"SourceArn,omitempty"`
	SourceType      *string                  `json:"SourceType,omitempty"`
}
