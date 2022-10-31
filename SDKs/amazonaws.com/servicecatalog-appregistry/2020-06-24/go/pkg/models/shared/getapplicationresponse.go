package shared

import (
"time")

type GetApplicationResponse struct {
    Arn *string `json:"arn,omitempty"`
    AssociatedResourceCount *int64 `json:"associatedResourceCount,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Integrations *Integrations `json:"integrations,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

