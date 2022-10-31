package shared

import (
"time")

type WebsiteCaSummary struct {
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    WebsiteCaID *string `json:"WebsiteCaId,omitempty"`
    
}

