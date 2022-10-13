package shared

import (
	"time"
)

type CustomDimensionParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type CustomDimension struct {
	AccountID     *string                    `json:"accountId"`
	Active        *bool                      `json:"active"`
	Created       *time.Time                 `json:"created"`
	ID            *string                    `json:"id"`
	Index         *int32                     `json:"index"`
	Kind          *string                    `json:"kind"`
	Name          *string                    `json:"name"`
	ParentLink    *CustomDimensionParentLink `json:"parentLink"`
	Scope         *string                    `json:"scope"`
	SelfLink      *string                    `json:"selfLink"`
	Updated       *time.Time                 `json:"updated"`
	WebPropertyID *string                    `json:"webPropertyId"`
}
