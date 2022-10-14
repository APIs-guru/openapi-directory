package shared

import (
	"time"
)

type DownloadShare struct {
	AccessKey           string     `json:"accessKey"`
	Classification      *int32     `json:"classification,omitempty"`
	CntDownloads        int32      `json:"cntDownloads"`
	CreatedAt           time.Time  `json:"createdAt"`
	CreatedBy           UserInfo   `json:"createdBy"`
	DataURL             *string    `json:"dataUrl,omitempty"`
	ExpireAt            *time.Time `json:"expireAt,omitempty"`
	ID                  int64      `json:"id"`
	InternalNotes       *string    `json:"internalNotes,omitempty"`
	IsEncrypted         *bool      `json:"isEncrypted,omitempty"`
	IsProtected         *bool      `json:"isProtected,omitempty"`
	MaxDownloads        *int32     `json:"maxDownloads,omitempty"`
	Name                string     `json:"name"`
	NodeID              int64      `json:"nodeId"`
	NodePath            *string    `json:"nodePath,omitempty"`
	NodeType            *string    `json:"nodeType,omitempty"`
	Notes               *string    `json:"notes,omitempty"`
	NotifyCreator       bool       `json:"notifyCreator"`
	Recipients          *string    `json:"recipients,omitempty"`
	ShowCreatorName     *bool      `json:"showCreatorName,omitempty"`
	ShowCreatorUsername *bool      `json:"showCreatorUsername,omitempty"`
	SmsRecipients       *string    `json:"smsRecipients,omitempty"`
	UpdatedAt           *time.Time `json:"updatedAt,omitempty"`
	UpdatedBy           *UserInfo  `json:"updatedBy,omitempty"`
}
