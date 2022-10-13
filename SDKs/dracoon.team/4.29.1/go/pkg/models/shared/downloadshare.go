package shared

import (
	"time"
)

type DownloadShare struct {
	AccessKey           string     `json:"accessKey"`
	Classification      *int32     `json:"classification"`
	CntDownloads        int32      `json:"cntDownloads"`
	CreatedAt           time.Time  `json:"createdAt"`
	CreatedBy           UserInfo   `json:"createdBy"`
	DataURL             *string    `json:"dataUrl"`
	ExpireAt            *time.Time `json:"expireAt"`
	ID                  int64      `json:"id"`
	InternalNotes       *string    `json:"internalNotes"`
	IsEncrypted         *bool      `json:"isEncrypted"`
	IsProtected         *bool      `json:"isProtected"`
	MaxDownloads        *int32     `json:"maxDownloads"`
	Name                string     `json:"name"`
	NodeID              int64      `json:"nodeId"`
	NodePath            *string    `json:"nodePath"`
	NodeType            *string    `json:"nodeType"`
	Notes               *string    `json:"notes"`
	NotifyCreator       bool       `json:"notifyCreator"`
	Recipients          *string    `json:"recipients"`
	ShowCreatorName     *bool      `json:"showCreatorName"`
	ShowCreatorUsername *bool      `json:"showCreatorUsername"`
	SmsRecipients       *string    `json:"smsRecipients"`
	UpdatedAt           *time.Time `json:"updatedAt"`
	UpdatedBy           *UserInfo  `json:"updatedBy"`
}
