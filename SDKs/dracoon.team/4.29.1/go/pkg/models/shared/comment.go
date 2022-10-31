package shared

import (
"time")

type Comment struct {
    CreatedAt time.Time `json:"createdAt"`
    CreatedBy UserInfo `json:"createdBy"`
    ID int64 `json:"id"`
    IsChanged bool `json:"isChanged"`
    IsDeleted bool `json:"isDeleted"`
    Text string `json:"text"`
    UpdatedAt time.Time `json:"updatedAt"`
    UpdatedBy UserInfo `json:"updatedBy"`
    
}

