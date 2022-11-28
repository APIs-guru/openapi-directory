package shared

import (
	"time"
)

// AttributeGroupSummary
// Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.
type AttributeGroupSummary struct {
	Arn            *string    `json:"arn,omitempty"`
	CreationTime   *time.Time `json:"creationTime,omitempty"`
	Description    *string    `json:"description,omitempty"`
	ID             *string    `json:"id,omitempty"`
	LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
	Name           *string    `json:"name,omitempty"`
}
