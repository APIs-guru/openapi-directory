package shared

import (
"time")

type VideoChannelCreateOwnerAccount struct {
    ID *int64 `json:"id,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

type VideoChannelCreate struct {
    Description *string `json:"description,omitempty"`
    DisplayName string `json:"displayName"`
    ID map[string]interface{} `json:"id,omitempty"`
    IsLocal *bool `json:"isLocal,omitempty"`
    Name string `json:"name"`
    OwnerAccount *VideoChannelCreateOwnerAccount `json:"ownerAccount,omitempty"`
    Support *string `json:"support,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

