package shared

import (
"time")

type ServiceSetting struct {
    Arn *string `json:"ARN,omitempty"`
    LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
    LastModifiedUser *string `json:"LastModifiedUser,omitempty"`
    SettingID *string `json:"SettingId,omitempty"`
    SettingValue *string `json:"SettingValue,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

