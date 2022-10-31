package shared

import (
"time")

type Group struct {
    CntUsers int32 `json:"cntUsers"`
    CreatedAt time.Time `json:"createdAt"`
    CreatedBy UserInfo `json:"createdBy"`
    ExpireAt *time.Time `json:"expireAt,omitempty"`
    GroupRoles *RoleList `json:"groupRoles,omitempty"`
    ID int64 `json:"id"`
    Name string `json:"name"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *UserInfo `json:"updatedBy,omitempty"`
    
}

