package shared

import (
	"time"
)

type CustomMetricParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type CustomMetric struct {
	AccountID     *string                 `json:"accountId"`
	Active        *bool                   `json:"active"`
	Created       *time.Time              `json:"created"`
	ID            *string                 `json:"id"`
	Index         *int32                  `json:"index"`
	Kind          *string                 `json:"kind"`
	MaxValue      *string                 `json:"max_value"`
	MinValue      *string                 `json:"min_value"`
	Name          *string                 `json:"name"`
	ParentLink    *CustomMetricParentLink `json:"parentLink"`
	Scope         *string                 `json:"scope"`
	SelfLink      *string                 `json:"selfLink"`
	Type          *string                 `json:"type"`
	Updated       *time.Time              `json:"updated"`
	WebPropertyID *string                 `json:"webPropertyId"`
}
