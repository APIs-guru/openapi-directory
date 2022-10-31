package shared

import (
"time")

type CreateFleetResponse struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

