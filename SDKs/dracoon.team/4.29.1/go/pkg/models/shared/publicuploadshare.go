package shared

import (
	"time"
)

type PublicUploadShare struct {
	CreatedAt             time.Time                `json:"createdAt"`
	CreatorName           string                   `json:"creatorName"`
	CreatorUsername       *string                  `json:"creatorUsername,omitempty"`
	ExpireAt              *time.Time               `json:"expireAt,omitempty"`
	IsEncrypted           *bool                    `json:"isEncrypted,omitempty"`
	IsProtected           bool                     `json:"isProtected"`
	MaxSize               *float64                 `json:"maxSize,omitempty"`
	MaxSlots              int32                    `json:"maxSlots"`
	Name                  *string                  `json:"name,omitempty"`
	Notes                 *string                  `json:"notes,omitempty"`
	RemainingSize         *int64                   `json:"remainingSize,omitempty"`
	RemainingSlots        *int32                   `json:"remainingSlots,omitempty"`
	ShowUploadedFiles     *bool                    `json:"showUploadedFiles,omitempty"`
	UploadedFiles         []PublicUploadedFileData `json:"uploadedFiles,omitempty"`
	UserUserPublicKeyList *UserUserPublicKeyList   `json:"userUserPublicKeyList,omitempty"`
}
