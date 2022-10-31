package shared

import (
"time")

type FacetEvent struct {
    Date *time.Time `json:"date,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

