package shared

import (
"time")

type CustomDimensionParentLink struct {
    Href *string `json:"href,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type CustomDimension struct {
    AccountID *string `json:"accountId,omitempty"`
    Active *bool `json:"active,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Index *int32 `json:"index,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentLink *CustomDimensionParentLink `json:"parentLink,omitempty"`
    Scope *string `json:"scope,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    WebPropertyID *string `json:"webPropertyId,omitempty"`
    
}

