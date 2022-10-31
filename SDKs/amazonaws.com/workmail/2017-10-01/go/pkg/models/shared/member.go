package shared

import (
"time")

type Member struct {
    DisabledDate *time.Time `json:"DisabledDate,omitempty"`
    EnabledDate *time.Time `json:"EnabledDate,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    State *EntityStateEnum `json:"State,omitempty"`
    Type *MemberTypeEnum `json:"Type,omitempty"`
    
}

