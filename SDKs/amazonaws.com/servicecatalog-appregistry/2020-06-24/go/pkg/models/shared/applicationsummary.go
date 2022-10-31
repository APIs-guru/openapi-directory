package shared

import (
"time")

type ApplicationSummary struct {
    Arn *string `json:"arn,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

