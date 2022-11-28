package shared

import (
	"time"
)

// CustomDimensionParentLink
// Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
type CustomDimensionParentLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CustomDimensionInput
// JSON template for Analytics Custom Dimension.
type CustomDimensionInput struct {
	AccountID     *string                    `json:"accountId,omitempty"`
	Active        *bool                      `json:"active,omitempty"`
	ID            *string                    `json:"id,omitempty"`
	Name          *string                    `json:"name,omitempty"`
	ParentLink    *CustomDimensionParentLink `json:"parentLink,omitempty"`
	Scope         *string                    `json:"scope,omitempty"`
	WebPropertyID *string                    `json:"webPropertyId,omitempty"`
}

// CustomDimension
// JSON template for Analytics Custom Dimension.
type CustomDimension struct {
	AccountID     *string                    `json:"accountId,omitempty"`
	Active        *bool                      `json:"active,omitempty"`
	Created       *time.Time                 `json:"created,omitempty"`
	ID            *string                    `json:"id,omitempty"`
	Index         *int32                     `json:"index,omitempty"`
	Kind          *string                    `json:"kind,omitempty"`
	Name          *string                    `json:"name,omitempty"`
	ParentLink    *CustomDimensionParentLink `json:"parentLink,omitempty"`
	Scope         *string                    `json:"scope,omitempty"`
	SelfLink      *string                    `json:"selfLink,omitempty"`
	Updated       *time.Time                 `json:"updated,omitempty"`
	WebPropertyID *string                    `json:"webPropertyId,omitempty"`
}
