package shared

import (
	"time"
)

type UploadShare struct {
	AccessKey           string     `json:"accessKey"`
	CntFiles            *int32     `json:"cntFiles"`
	CntUploads          *int32     `json:"cntUploads"`
	CreatedAt           time.Time  `json:"createdAt"`
	CreatedBy           UserInfo   `json:"createdBy"`
	DataURL             *string    `json:"dataUrl"`
	ExpireAt            *time.Time `json:"expireAt"`
	FilesExpiryPeriod   *int32     `json:"filesExpiryPeriod"`
	ID                  int64      `json:"id"`
	InternalNotes       *string    `json:"internalNotes"`
	IsEncrypted         *bool      `json:"isEncrypted"`
	IsProtected         bool       `json:"isProtected"`
	MaxSize             *int64     `json:"maxSize"`
	MaxSlots            *int32     `json:"maxSlots"`
	Name                string     `json:"name"`
	Notes               *string    `json:"notes"`
	NotifyCreator       bool       `json:"notifyCreator"`
	Recipients          *string    `json:"recipients"`
	ShowCreatorName     *bool      `json:"showCreatorName"`
	ShowCreatorUsername *bool      `json:"showCreatorUsername"`
	ShowUploadedFiles   *bool      `json:"showUploadedFiles"`
	SmsRecipients       *string    `json:"smsRecipients"`
	TargetID            int64      `json:"targetId"`
	TargetPath          *string    `json:"targetPath"`
	TargetType          *string    `json:"targetType"`
	UpdatedAt           *time.Time `json:"updatedAt"`
	UpdatedBy           *UserInfo  `json:"updatedBy"`
}
