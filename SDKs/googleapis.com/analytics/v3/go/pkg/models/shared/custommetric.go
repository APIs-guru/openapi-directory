package shared

import (
	"time"
)

type CustomMetricParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type CustomMetric struct {
	AccountID     *string                 `json:"accountId,omitempty"`
	Active        *bool                   `json:"active,omitempty"`
	Created       *time.Time              `json:"created,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	Index         *int32                  `json:"index,omitempty"`
	Kind          *string                 `json:"kind,omitempty"`
	MaxValue      *string                 `json:"max_value,omitempty"`
	MinValue      *string                 `json:"min_value,omitempty"`
	Name          *string                 `json:"name,omitempty"`
	ParentLink    *CustomMetricParentLink `json:"parentLink,omitempty"`
	Scope         *string                 `json:"scope,omitempty"`
	SelfLink      *string                 `json:"selfLink,omitempty"`
	Type          *string                 `json:"type,omitempty"`
	Updated       *time.Time              `json:"updated,omitempty"`
	WebPropertyID *string                 `json:"webPropertyId,omitempty"`
}
