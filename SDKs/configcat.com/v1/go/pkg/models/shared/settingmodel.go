package shared

import (
"time")

type SettingModel struct {
    ConfigID *string `json:"configId,omitempty"`
    ConfigName *string `json:"configName,omitempty"`
    ExpirationWarningAt *time.Time `json:"expirationWarningAt,omitempty"`
    Hint *string `json:"hint,omitempty"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    OwnerUserEmail *string `json:"ownerUserEmail,omitempty"`
    OwnerUserFullName *string `json:"ownerUserFullName,omitempty"`
    SettingID *int32 `json:"settingId,omitempty"`
    SettingType *SettingTypeEnum `json:"settingType,omitempty"`
    Tags []TagModel `json:"tags,omitempty"`
    
}

