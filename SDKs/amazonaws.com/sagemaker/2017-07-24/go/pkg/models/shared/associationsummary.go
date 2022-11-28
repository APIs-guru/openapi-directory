package shared

import (
	"time"
)

// AssociationSummary
// Lists a summary of the properties of an association. An association is an entity that links other lineage or experiment entities. An example would be an association between a training job and a model.
type AssociationSummary struct {
	AssociationType *AssociationEdgeTypeEnum `json:"AssociationType,omitempty"`
	CreatedBy       *UserContext             `json:"CreatedBy,omitempty"`
	CreationTime    *time.Time               `json:"CreationTime,omitempty"`
	DestinationArn  *string                  `json:"DestinationArn,omitempty"`
	DestinationName *string                  `json:"DestinationName,omitempty"`
	DestinationType *string                  `json:"DestinationType,omitempty"`
	SourceArn       *string                  `json:"SourceArn,omitempty"`
	SourceName      *string                  `json:"SourceName,omitempty"`
	SourceType      *string                  `json:"SourceType,omitempty"`
}
