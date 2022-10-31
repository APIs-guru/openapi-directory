package shared

import (
"time")

type SettingDataModel struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatorEmail *string `json:"creatorEmail,omitempty"`
    CreatorFullName *string `json:"creatorFullName,omitempty"`
    ExpirationWarningAt *time.Time `json:"expirationWarningAt,omitempty"`
    Hint *string `json:"hint,omitempty"`
    IsWatching *bool `json:"isWatching,omitempty"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    OwnerEmail *string `json:"ownerEmail,omitempty"`
    OwnerFullName *string `json:"ownerFullName,omitempty"`
    SettingID *int32 `json:"settingId,omitempty"`
    SettingType *SettingTypeEnum `json:"settingType,omitempty"`
    
}

