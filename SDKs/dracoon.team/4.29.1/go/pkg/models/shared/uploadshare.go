package shared

import (
"time")

type UploadShare struct {
    AccessKey string `json:"accessKey"`
    CntFiles *int32 `json:"cntFiles,omitempty"`
    CntUploads *int32 `json:"cntUploads,omitempty"`
    CreatedAt time.Time `json:"createdAt"`
    CreatedBy UserInfo `json:"createdBy"`
    DataURL *string `json:"dataUrl,omitempty"`
    ExpireAt *time.Time `json:"expireAt,omitempty"`
    FilesExpiryPeriod *int32 `json:"filesExpiryPeriod,omitempty"`
    ID int64 `json:"id"`
    InternalNotes *string `json:"internalNotes,omitempty"`
    IsEncrypted *bool `json:"isEncrypted,omitempty"`
    IsProtected bool `json:"isProtected"`
    MaxSize *int64 `json:"maxSize,omitempty"`
    MaxSlots *int32 `json:"maxSlots,omitempty"`
    Name string `json:"name"`
    Notes *string `json:"notes,omitempty"`
    NotifyCreator bool `json:"notifyCreator"`
    Recipients *string `json:"recipients,omitempty"`
    ShowCreatorName *bool `json:"showCreatorName,omitempty"`
    ShowCreatorUsername *bool `json:"showCreatorUsername,omitempty"`
    ShowUploadedFiles *bool `json:"showUploadedFiles,omitempty"`
    SmsRecipients *string `json:"smsRecipients,omitempty"`
    TargetID int64 `json:"targetId"`
    TargetPath *string `json:"targetPath,omitempty"`
    TargetType *string `json:"targetType,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *UserInfo `json:"updatedBy,omitempty"`
    
}

