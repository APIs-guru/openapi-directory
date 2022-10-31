package shared

import (
"time")

type VideoChannelUpdateOwnerAccount struct {
    ID *int64 `json:"id,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

type VideoChannelUpdate struct {
    BulkVideosSupportUpdate *bool `json:"bulkVideosSupportUpdate,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ID map[string]interface{} `json:"id,omitempty"`
    IsLocal *bool `json:"isLocal,omitempty"`
    OwnerAccount *VideoChannelUpdateOwnerAccount `json:"ownerAccount,omitempty"`
    Support *string `json:"support,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

