package shared

import (
"time")

type DescribeGroupResponse struct {
    DisabledDate *time.Time `json:"DisabledDate,omitempty"`
    Email *string `json:"Email,omitempty"`
    EnabledDate *time.Time `json:"EnabledDate,omitempty"`
    GroupID *string `json:"GroupId,omitempty"`
    Name *string `json:"Name,omitempty"`
    State *EntityStateEnum `json:"State,omitempty"`
    
}

