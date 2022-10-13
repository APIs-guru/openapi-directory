package shared

import (
	"time"
)

type AssociationSummary struct {
	AssociationType *AssociationEdgeTypeEnum `json:"AssociationType"`
	CreatedBy       *UserContext             `json:"CreatedBy"`
	CreationTime    *time.Time               `json:"CreationTime"`
	DestinationArn  *string                  `json:"DestinationArn"`
	DestinationName *string                  `json:"DestinationName"`
	DestinationType *string                  `json:"DestinationType"`
	SourceArn       *string                  `json:"SourceArn"`
	SourceName      *string                  `json:"SourceName"`
	SourceType      *string                  `json:"SourceType"`
}
