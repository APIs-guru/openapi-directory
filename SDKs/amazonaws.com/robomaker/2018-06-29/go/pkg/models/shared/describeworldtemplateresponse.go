package shared

import (
"time")

type DescribeWorldTemplateResponse struct {
    Arn *string `json:"arn,omitempty"`
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

