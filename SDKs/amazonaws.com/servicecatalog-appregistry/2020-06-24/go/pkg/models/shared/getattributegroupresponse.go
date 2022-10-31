package shared

import (
"time")

type GetAttributeGroupResponse struct {
    Arn *string `json:"arn,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

